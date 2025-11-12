#!/usr/bin/env ts-node

import {promises as fs} from 'fs'

type Entry = {
    nazwa?: string
    email?: string | null
    adresWWW?: string | null
    telefon?: string | null
    daneAdresowe?: {
        powiat?: string | null
    } | null
    podmiot?: {
        adresWWW?: string | null
        daneAdresowe?: { powiat?: string | null } | null
    } | null
}

const inputPath = './scripts/api-data/podkarpacie.json'
const outputPath = './scripts/csv-data/podkarpacie.csv'

function csvEscape(value: string | null | undefined): string {
    if (value === null || value === undefined) return ''
    // trim whitespace, replace newlines, and escape quotes
    const v = String(value).replace(/\r?\n/g, ' ').trim()
    if (v.includes('"') || v.includes(',') || v.includes('\n') || v.includes('\r')) {
        return `"${v.replace(/"/g, '""')}"`
    }
    return v
}

function normalizeUrl(u?: string | null): string | null {
    if (!u) return null
    const trimmed = u.trim()
    if (!trimmed) return null
    // some values are 'brak' or uppercase WWW.SOMETHING -> keep but normalize common 'brak'/ '-' to empty
    if (/^(brak|-|n\/a|null)$/i.test(trimmed)) return null
    // add http:// if starts with 'www.' and not already a scheme
    if (/^www\./i.test(trimmed) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed)) {
        return 'http://' + trimmed
    }
    return trimmed
}

const capitalizeFirstLetter = (word: string): string => {
    if (!word) return ""
    return word.charAt(0).toUpperCase() + word.slice(1)
}

async function main() {
    try {
        const raw = await fs.readFile(inputPath, 'utf8')
        const parsed = JSON.parse(raw)

        // file structure may be { content: [ ... ] } or array directly
        const items: Entry[] = Array.isArray(parsed)
            ? parsed
            : Array.isArray(parsed?.content)
                ? parsed.content
                : []

        const header = ['nazwa', 'email', 'adresWWW', 'telefon', 'powiat']
        const lines = [header.join(',')]

        for (const it of items) {
            const nazwa = (it.nazwa ?? '').replace('"', '').replace("\"", "").replace(',', "").replace("   ", " ")
            const email = it.email ?? ''
            const telefon = it.telefon ?? ''

            // prefer top-level adresWWW, fallback to podmiot.adresWWW
            let adresWWW = normalizeUrl(it.adresWWW ?? (it.podmiot && it.podmiot.adresWWW ? it.podmiot.adresWWW : null))

            // powiat: prefer daneAdresowe.powiat, fallback to podmiot.daneAdresowe.powiat
            let powiat = capitalizeFirstLetter(it.daneAdresowe?.powiat ?? it.podmiot?.daneAdresowe?.powiat ?? '')
            // normalize powiat: lowercase/trim typical whitespace
            if (typeof powiat === 'string') powiat = powiat.trim()

            const row = [
                csvEscape(nazwa),
                csvEscape(email),
                csvEscape(adresWWW ?? ''),
                csvEscape(telefon),
                csvEscape(powiat)
            ].join(',')

            lines.push(row)
        }

        await fs.writeFile(outputPath, lines.join('\n'), 'utf8')
        console.log(`Gotowe — zapisano ${items.length} wierszy do: ${outputPath}`)
    } catch (err) {
        console.error('Błąd:', err)
        process.exit(1)
    }
}

main()
