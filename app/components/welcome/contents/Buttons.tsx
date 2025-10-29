import React, {useState, useEffect} from 'react'
import { useConveyor } from '@/app/hooks/use-conveyor'
import {startDataValue} from './StartData'

const dataPath = 'data.txt'
const file = 'Hello write file'

export function SettingsComponent() {
  const conveyor = useConveyor()
  const [appInfo, setAppInfo] = useState(null)
  const [fileData, setFileData] = useState(startDataValue)

  useEffect(() => {
    // Get app information
   // @ts-ignore
    conveyor.app.getAppInfo().then(setAppInfo)
    fileTxtRead(dataPath)
  }, [])

  const saveTheme = (theme: string) => {
    conveyor.app.saveUserPreference('theme', theme)
  }
  const fileTxtRead = (path: string) => {
    conveyor.file.readFile(path).then(setFileData)
    console.log ('1',fileData)
    const Data =  JSON.parse(fileData)
    console.log ('2',Data)
      // setTimeout(() => {  
    console.log ('3',Data.siz[1].price)
  // }, 1000);
  }

  const fileTxtWrite = (path: string) => {
    conveyor.file.writeFile(path, file)
      console.log (file)
  }

//  const parseData = () => {
//   setTimeout(() => {  
//     const Data =  JSON.parse(fileData)
//     console.log (fileData)
//     console.log (Data.id)
//   }, 1000);
//  }


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