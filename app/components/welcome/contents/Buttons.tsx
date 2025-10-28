import React, {useState, useEffect} from 'react'
import { useConveyor } from '@/app/hooks/use-conveyor'

const path = require('path');
// const pathApp = __dirname
// console.log (pathApp)

export function SettingsComponent() {
  const conveyor = useConveyor()
  const [appInfo, setAppInfo] = useState(null)
  const [fileData, setFileData] = useState('----')
  const [pathData, setPathData] = useState('')

  useEffect(() => {
    // Get app information
   // @ts-ignore
    conveyor.app.getAppInfo().then(setAppInfo)
    conveyor.file.pathFile(pathData).then(setPathData)
  }, [])

  const dataPath = 'data.txt'
  // const a = path.join(pathData, dataPath)
  // console.log (a)

  const saveTheme = (theme: string) => {
    conveyor.app.saveUserPreference('theme', theme)
  }
  const fileTxtRead = (path: string) => {
    conveyor.file.readFile(path).then(setFileData)
    setTimeout(() => {
      console.log (fileData)
    }, 1000);
  }


  

  // const a = "{\r\n    \"rows\" : [ {\r\n        \"id\" : 1,\r\n        \"name\" : \"Первый элемент\"\r\n    }, {\r\n        \"id\" : 2,\r\n        \"name\" : \"Второй элемент\"\r\n    } ]\r\n}"
  // const dataJS = JSON.parse(a)

  // console.log (dataJS.rows[0].name);


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