import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ElectronContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Electron
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/electron.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>Благодаря возможностям современного Chromium, Electron дает вам чистый лист без каких-либо предубеждений для создания вашего приложения.</p>
      <p>
       Вы можете интегрировать свои любимые библиотеки и фреймворки из экосистемы фронтенда или проложить свой собственный путь
        с помощью уникального HTML-кода.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Web Technologies"
          description="Electron встраивает Chromium и Node.js, чтобы позволить разработчикам создавать десктопные приложения"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Cross-Platform"
          description="С легкостью создавайте кроссплатформенные настольные приложения с помощью Electron"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Open Source"
          description="Electron — проект с открытым исходным кодом, поддерживаемый сообществом."
          icon={AsterikIcon}
        />

        <ContentStep
          title="Native APIs"
          description="Легкий доступ к собственным API с помощью встроенных модулей Electron"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Узнайте больше об Electron на сайте{' '}
        <a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">
          electronjs.org
        </a>
      </p>
    </div>
  )
}

export default ElectronContent
