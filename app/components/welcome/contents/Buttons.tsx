import { useConveyor } from '@/app/hooks/use-conveyor'

export function MyComponent() {
  const { version } = useConveyor('app')
  const { windowMinimize } = useConveyor('window')

  const handleGetVersion = async () => {
    console.log('App version:', await version())
    console.log('App version:', await window.conveyor.app.version()) // OR
  }

  return (
    <div>
      <button onClick={handleGetVersion} className='btn'>Get Version</button>
      <button onClick={windowMinimize} className='btn'>Minimize Window</button>
    </div>
  )
}