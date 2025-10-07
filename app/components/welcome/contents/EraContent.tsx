import ContentStep from '../ContentStep'
import CodeWindowIcon from '../icons/CodeWindowIcon'
import FanIcon from '../icons/FanIcon'
import ColorSchemeIcon from '../icons/ColorSchemeIcon'
import AsterikIcon from '../icons/AsterikIcon'
import { useConveyor } from '@/app/hooks/use-conveyor'
import { useEffect, useState } from 'react'

const EraContent = () => {
  const { version } = useConveyor('app')
  const [appVersion, setAppVersion] = useState('')

  useEffect(() => {
    const fetchVersion = async () => {
      const appVersion = await version()
      setAppVersion(appVersion)
    }
    fetchVersion()
  }, [version])

  return (
    <div>
      <h2 className="flex items-center gap-4">
        Electron React App
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/era.svg" className="w-4 h-4" />
        </div>
      </h2>
      <p>
        Добро пожаловать в приложение Electron React (v{appVersion})! Готовый стартовый комплект, обеспечивающий прочную основу для
        разработки настольных приложений.
      </p>
      <p>
        Этот проект создан с использованием Electron, React, Vite, TypeScript и Tailwind CSS, чтобы предоставить современную среду разработки с новейшими функциями.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Custom Window Titlebar & Menus"
          description="Настройте внешний вид окна приложения"
          icon={CodeWindowIcon}
        />

        <ContentStep
          title="Lightning Fast HMR"
          description="Горячая замена модулей, которая выполняется быстро независимо от размера приложения"
          icon={FanIcon}
        />

        <ContentStep
          title="Dark & Light Mode"
          description="Переключайтесь между темным и светлым режимами одним нажатием кнопки"
          icon={ColorSchemeIcon}
        />

        <ContentStep
          title="IPC Communication Handlers"
          description="Обработчики API для связи между основными процессами и процессами рендеринга"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Узнайте больше о приложении Electron React на сайте{' '}
        <a href="https://github.com/guasam/electron-react-app" target="_blank" rel="noreferrer">
          github.com
        </a>
      </p>
    </div>
  )
}

export default EraContent
