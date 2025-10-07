import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ViteContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Electron Vite
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/vite.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>Объедините возможности настольного Electron с молниеносным опытом разработки Vite.</p>
      <p>
        Эта мощная комбинация обеспечивает исключительный опыт разработки с мгновенным HMR,
        позволяя вам создавать многофункциональные настольные приложения.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Vite Powered"
          description="Наследуйте все преимущества Vite и используйте его так же, как Vite"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Optimize Asset Handling"
          description="Оптимизация обработки ресурсов для основного процесса Electron и процесса рендеринга"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Source Code Protection"
          description="Компилировать в байт-код V8 для защиты исходного кода"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Pre-configured"
          description="Предварительно настроено для Electron, не беспокойтесь о настройке"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Узнайте больше о Electron Vite на сайте{' '}
        <a href="https://electron-vite.org/guide/" target="_blank" rel="noreferrer">
          electron-vite.org
        </a>
      </p>
    </div>
  )
}

export default ViteContent
