import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ReactContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        React
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/react.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>React — декларативная, эффективная и гибкая библиотека JavaScript для создания пользовательских интерфейсов.</p>
      <p>
        Он позволяет создавать пользовательские интерфейсы из отдельных частей, называемых компонентами, создавая повторно используемый и поддерживаемый код для ваших приложений.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Component-Based"
          description="Создавайте инкапсулированные компоненты, управляющие своим состоянием для сложных пользовательских интерфейсов."
          icon={AsterikIcon}
        />

        <ContentStep
          title="Declarative"
          description="Создавайте интерактивные пользовательские интерфейсы с простыми представлениями для каждого состояния приложения."
          icon={AsterikIcon}
        />

        <ContentStep
          title="Learn Once, Write Anywhere"
          description="Разрабатывайте новые функции без переписывания существующего кода"
          icon={AsterikIcon}
        />

        <ContentStep
          title="Virtual DOM"
          description="Облегченное представление DOM для оптимальной производительности рендеринга"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Узнайте больше о React на сайте{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          reactjs.org
        </a>
      </p>
    </div>
  )
}

export default ReactContent
