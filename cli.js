#!/usr/bin/env node
'use strict'

const fs = require('fs')
const toshino = __dirname + '/toshino.out'
const data = fs.readFileSync(toshino, 'utf-8')

console.log(data)
