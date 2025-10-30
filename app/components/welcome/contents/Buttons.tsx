import React, {useState, useEffect} from 'react'
import { useConveyor } from '@/app/hooks/use-conveyor'
import {initialValue} from './InitialData'

const dataPath = 'data.txt'
// const file = 'Hello write file'

export function SettingsComponent() {
  const conveyor = useConveyor()
  const [appInfo, setAppInfo] = useState(null)
  const [fileData, setFileData] = useState(initialValue)

  useEffect(() => {
    // Get app information
   // @ts-ignore
    conveyor.app.getAppInfo().then(setAppInfo)
    fileTxtRead(dataPath)
    console.log ('10',fileData)
  }, [])

  const saveTheme = (theme: string) => {
    conveyor.app.saveUserPreference('theme', theme)
  }
  const fileTxtRead = (path: string) => {
    conveyor.file.readFile(path).then(setFileData)
    console.log ('1',fileData)
    const Data =  JSON.parse(fileData)
    console.log ('2',Data)
    console.log ('3',Data.id)
    strigifySetFileData(Data)
  }

  const strigifySetFileData = (Data) => {
      setFileData (JSON.stringify(Data))
      console.log ('4',fileData)
  }

  const fileTxtWrite = (path: string) => {
    conveyor.file.writeFile(path, fileData)
      console.log ('5',fileData)
  }




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
      <button className='btn' onClick={() => fileTxtWrite(dataPath)}>writeFile</button>
    </div>
  )
}