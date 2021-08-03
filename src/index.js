import fs from 'fs'
import path from 'path'

const file1 = JSON.parse(
    fs.readFileSync(
        path.resolve(process.cwd(), '__fixtures__', 'filepath1.json')
    )
)
const file2 = JSON.parse(
    fs.readFileSync(
        path.resolve(process.cwd(), '__fixtures__', 'filepath2.json')
    )
)
const genDiff = () => {
    const result = []
    const entries1 = Object.entries(file1)
    const entries2 = Object.entries(file2)
    const [...rest1] = entries1
    const [...rest2] = entries2
    entries1.map((item1) => {
        const [key1, value1] = item1
        return entries2.map((item2) => {
            const [key2, value2] = item2
            if ([key1, value1].toString() === [key2, value2].toString()) {
                return result.push(`  ${key1}: ${value1}\n`)
            }
            if (
                key1.toString() === key2.toString() &&
                value1.toString() !== value2.toString()
            ) {
                return result.push(
                    `+ ${key2}: ${value2}\n`,
                    `- ${key1}: ${value1}\n`
                )
            }
            if (
                !rest2.toString().includes(key1) &&
                !result.includes(`- ${key1}: ${value1}\n`)
            ) {
                return result.push(`- ${key1}: ${value1}\n`)
            }
            if (
                !rest1.toString().includes(key2) &&
                !result.includes(`+ ${key2}: ${value2}\n`)
            ) {
                return result.push(`+ ${key2}: ${value2}\n`)
            }
            return result
        })
    })

    const newString = `{\n  ${result.sort((a, b) => (a[2] > b[2] ? 1 : -1))}}`
    const re = /,/gi
    return newString.replace(re, '  ')
}
export default genDiff
