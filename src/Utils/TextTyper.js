import React, { useState, useEffect } from "react";

// Создаем глобальную очередь
const queue = [];

export default function TextTyper({ delay = 0, interval = 50, Markup = "span", children }) {
  const [typedText, setTypedText] = useState("");
  const idRef = React.useRef(null); // Ссылка на уникальный идентификатор

  useEffect(() => {
    // Создаем уникальный идентификатор
    idRef.current = Math.random().toString(36).substring(7);

    // Добавляем идентификатор в очередь при монтировании
    queue.push(idRef.current);

    // Функция для запуска анимации
    const startAnimation = () => {
      const text = getTextContent(children);
      typingRender(text, setTypedText, interval);
    };

    // Экспортируем функцию для возможности вызова извне
    window[idRef.current] = startAnimation;

    // Запускаем анимацию, если этот компонент первый в очереди
    if (queue.length === 1) {
      startAnimation();
    }

    // Возвращаем функцию для удаления из очереди при размонтировании
    return () => {
      const index = queue.indexOf(idRef.current);
      if (index !== -1) {
        queue.splice(index, 1);
      }
      // Очищаем функцию из глобального объекта
      delete window[idRef.current];
    };
  }, []); // Пустой массив зависимостей, чтобы выполнять эффект только один раз

  const getTextContent = (children) => {
    if (typeof children === 'string') {
      return children.trim();
    }
    if (Array.isArray(children)) {
      return children.map(child => getTextContent(child)).join('');
    }
    if (typeof children === 'object' && children.props && children.props.children) {
      return getTextContent(children.props.children);
    }
    return '';
  };

  const typingRender = (text, updater, interval) => {
    let localTypingIndex = 0;
    let localTyping = "";
    if (text) {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);

          // Удаляем себя из очереди
          queue.shift();

          // Запускаем следующий компонент из очереди, если есть
          if (queue.length > 0) {
            const nextId = queue[0];
            window[nextId]();
          }
        }
      }, interval);
    }
  };

  return (
    <Markup>
      {typedText}
    </Markup>
  );
}
