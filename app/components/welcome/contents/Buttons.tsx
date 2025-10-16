import React, {useState, useEffect} from 'react'
import { useConveyor } from '@/app/hooks/use-conveyor'

export function SettingsComponent() {
  const conveyor = useConveyor()
  const [appInfo, setAppInfo] = useState(null)

  useEffect(() => {
    // Get app information
    conveyor.app.getAppInfo().then(setAppInfo)
  }, [])

  const saveTheme = (theme: string) => {
    conveyor.app.saveUserPreference('theme', theme)
  }

  return (
    <div>
      <h2>App Info</h2>
      {appInfo && (
        <p>
          {appInfo.name} v{appInfo.version} on {appInfo.platform}
        </p>
      )}

      <button onClick={() => saveTheme('dark')}>Set Dark Theme</button>
    </div>
  )
}