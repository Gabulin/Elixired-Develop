import React, { useState, useEffect, useRef } from "react";

// Создаем глобальную очередь
const queue = [];

export default function TextTyper({ delay = 0, interval = 20, Markup = "span", children }) {
  const [typedText, setTypedText] = useState("");
  const idRef = useRef(null); // Ссылка на уникальный идентификатор

  useEffect(() => {
    // Создаем уникальный идентификатор
    idRef.current = Math.random().toString(36).substring(7);

    // Добавляем идентификатор в очередь при монтировании
    queue.push(idRef.current);

    // Функция для запуска анимации
    const startAnimation = () => {
      const { text, boldWords } = getTextContent(children);
      typingRender(text, setTypedText, interval, boldWords);
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
    let formattedText = '';
    let boldWords = [];

    const traverseChildren = (child, index) => {
      if (typeof child === 'string') {
        formattedText += child;
      } else if (Array.isArray(child)) {
        child.forEach((subChild, i) => traverseChildren(subChild, `${index}-${i}`));
      } else if (typeof child === 'object' && child.props && child.props.children) {
        traverseChildren(child.props.children, index);
      }

      if (child.props && child.props.bold) {
        boldWords.push(child.props.children);
      }
    };

    traverseChildren(children, '0');

    return { text: formattedText, boldWords };
  };

  const typingRender = (text, updater, interval, boldWords) => {
    let localTypingIndex = 0;
    let localTyping = "";
    if (text) {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          let isBold = false;
          boldWords.forEach((word) => {
            const wordLength = word.length;
            const slice = text.slice(localTypingIndex, localTypingIndex + wordLength);
            if (slice === word) {
              localTyping += `<strong>${slice}</strong>`;
              localTypingIndex += wordLength;
              isBold = true;
            }
          });

          if (!isBold) {
            localTyping += text[localTypingIndex];
            localTypingIndex++;
          }

          updater(localTyping);
        } else {
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