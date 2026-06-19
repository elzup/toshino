'use strict'

// Build step: brotli-compress the colored AA so the published package
// ships a tiny binary blob instead of ~97 KB of raw ANSI escapes.
// Mirrors elzup/iwiaa's "compressed blob + tiny decoder" approach.

const fs = require('fs')
const zlib = require('zlib')

const source = process.argv[2] || 'toshino.out'
const data = fs.readFileSync(source)
const compressed = zlib.brotliCompressSync(data, {
  params: {
    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    [zlib.constants.BROTLI_PARAM_LGWIN]: 24,
  },
})

fs.writeFileSync('toshino.br', compressed)
console.log(
  `toshino.br ${compressed.length} B (source ${data.length} B, ` +
    `${((1 - compressed.length / data.length) * 100).toFixed(1)}% smaller)`,
)
