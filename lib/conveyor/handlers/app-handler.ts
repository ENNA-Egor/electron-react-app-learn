import { app } from 'electron'
import { handle } from '@/lib/main/shared'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

export const registerAppHandlers = () => {
  handle('get-app-info', () => ({
    name: app.getName(),
    version: app.getVersion(),
    platform: process.platform,
  }))

  handle('save-user-preference', ({ key, value }) => {
    // Save to file, database, etc.
    console.log(`Saving ${key}: ${value}`)
    return true
  })
}

export const registerFileHandlers = () => {
  handle('file-read', (path: string) => {
    return readFileSync(path, 'utf-8')
  })

  handle('file-write', (path: string, content: string) => {
    writeFileSync(path, content, 'utf-8')
  })

  handle('file-delete', (path: string) => {
    unlinkSync(path)
  })
}