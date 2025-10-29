import { app } from 'electron'
import { handle } from '@/lib/main/shared'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

const path = require('path');
const appRootPath: string = app.getAppPath();
console.log ('mypath', appRootPath)

export const registerAppHandlers = () => {
  handle('get-app-info', () => ({
    name: app.getName(),
    version: app.getVersion(),
    platform: process.platform,
  }))

 handle('version', () => app.getVersion())

  handle('save-user-preference', ({ key, value }) => {
    // Save to file, database, etc.
    console.log(`Saving ${key}: ${value}`)
    return true
  })
}

export const registerFileHandlers = () => {
  handle('file-read', (mypath: string) => {
    const data = readFileSync(path.join(appRootPath, mypath), 'utf-8');
    return data
  })


  handle('file-write', (mypath: string, content: string) => {
    writeFileSync(mypath, content, 'utf-8')
  })

  handle('file-delete', (mypath: string) => {
    unlinkSync(mypath)
  })
}