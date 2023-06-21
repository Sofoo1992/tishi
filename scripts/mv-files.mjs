import fs from 'fs'
import path from 'path'

const buildDir = path.join(process.cwd(), 'build')

const move = (from, to) => {
    const frompath = path.join(buildDir, from)
    const topath = path.join(buildDir, to)

    fs.copyFileSync(frompath, topath)
}


move('docs.html', 'docs/index.html')