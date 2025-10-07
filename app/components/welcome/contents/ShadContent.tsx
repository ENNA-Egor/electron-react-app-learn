import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ShadContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Shadcn UI
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/shadcn.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>Коллекция повторно используемых компонентов, созданных с помощью Radix UI и Tailwind CSS.</p>
      <p>
        Shadcn UI предоставляет набор доступных, настраиваемых и красивых компонентов, которые вы можете копировать и вставлять
        в свои приложения. Это не библиотека компонентов, а набор повторно используемых компонентов, которые вы можете копировать и
        настраивать.
      </p>
      <div className="welcome-content-steps">
        <ContentStep
          title="Accessible Components"
          description="Создан с использованием примитивов пользовательского интерфейса Radix для максимальной доступности"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Customizable"
          description="Скопируйте и вставьте компоненты в свой проект и настройте их."
          icon={AsterikIcon}
        />

        <ContentStep
          title="Tailwind CSS"
          description="Разработано с использованием Tailwind CSS для обеспечения последовательного и современного дизайна."
          icon={AsterikIcon}
        />

        <ContentStep
          title="TypeScript"
          description="Написано на TypeScript для удобства разработчиков"
          icon={AsterikIcon}
        />
      </div>
      <p className="learn-more">
        Узнайте больше о Shadcn UI на сайте{' '}
        <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
          ui.shadcn.com
        </a>
      </p>
    </div>
  )
}

export default ShadContent
