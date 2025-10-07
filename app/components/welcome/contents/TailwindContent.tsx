import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const TailwindContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Tailwind CSS
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/tailwind.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>CSS-фреймворк, ориентированный в первую очередь на утилиты, для быстрого создания пользовательских интерфейсов.</p>
      <p>
        Tailwind CSS предоставляет низкоуровневые служебные классы, которые позволяют вам создавать полностью индивидуальный
         дизайн, не выходя из HTML, что приводит к более быстрой разработке и более чистому коду.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Utility First"
          description="Применяйте предопределенные служебные классы непосредственно в вашей разметке"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Component Driven"
          description="Извлечение повторно используемых компонентов для создания единообразной системы проектирования"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Customizable"
          description="Расширьте Tailwind CSS с помощью пользовательских утилит и тем"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Performance"
          description="Оптимизируйте свой CSS для повышения производительности с помощью встроенных инструментов Tailwind."
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Узнайте больше о Tailwind CSS на сайте{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          tailwindcss.com
        </a>
      </p>
    </div>
  )
}

export default TailwindContent
