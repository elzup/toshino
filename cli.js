#!/usr/bin/env node
'use strict'

const fs = require('fs')
const zlib = require('zlib')

const blob = fs.readFileSync(__dirname + '/toshino.br')
process.stdout.write(zlib.brotliDecompressSync(blob))
