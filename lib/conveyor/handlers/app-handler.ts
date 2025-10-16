import { app } from 'electron'
import { handle } from '@/lib/main/shared'

export const registerAppHandlers = () => {
  handle('get-app-info', () => ({
    name: app.getName(),
    version: app.getVersion(),
    platform: process.platform,
  }))

  handle('save-user-preference', async ({ key, value }) => {
    // Save to file, database, etc.
    console.log(`Saving ${key}: ${value}`)
    return true
  })
}