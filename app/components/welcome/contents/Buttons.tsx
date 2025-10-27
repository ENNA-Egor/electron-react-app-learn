import React, {useState, useEffect} from 'react'
import { useConveyor } from '@/app/hooks/use-conveyor'

export function SettingsComponent() {
  const conveyor = useConveyor()
  const [appInfo, setAppInfo] = useState(null)
  const [fileData, setFileData] = useState('----')

  useEffect(() => {
    // Get app information
   // @ts-ignore
    conveyor.app.getAppInfo().then(setAppInfo)
  }, [])

  const saveTheme = (theme: string) => {
    conveyor.app.saveUserPreference('theme', theme)
  }
  const fileTxtRead = (path: string) => {
    conveyor.file.readFile(path).then(setFileData)
  }

  const dataPath = 'data.txt'
  // const a = fileData
  // const dataJS = JSON.parse(a)

  // console.log (dataJS)


  return (
      
    <div>
      <h2>App Info</h2>
      {appInfo && (
        <p>
          {(appInfo as any).name} v{(appInfo as any).version} on {(appInfo as any).platform}
        </p>
      )}
       <h2>File Info</h2>
      {fileData && (
        <p>
          {fileData}
        </p>
      )}

      <button className='btn' onClick={() => saveTheme('dark')}>Set Dark Theme</button>
      <button className='btn' onClick={() => fileTxtRead(dataPath)}>readFile</button>
    </div>
  )
}