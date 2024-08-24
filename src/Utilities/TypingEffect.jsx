import React from 'react'
import { useState, useEffect } from 'react';

function TypingEffect(props) {
  const [text, setText] = useState('');

    const actualText = props.text
    const speed = props.speed || 20; // Inversely proportional to typing speed
    const startDelay = props.delay || 500; // Delay before typing starts (in milliseconds)

    useEffect(() => {
      const startTyping = () => {
        let i = 0
        let temp = ''

        const typer = () => {
          if (i < actualText.length) {
            temp += actualText.charAt(i)
            setText(prev => prev = temp)
            i++
            setTimeout(typer, speed)
          }
        }

        typer()
      }

      const delayTimeout = setTimeout(startTyping, startDelay)

      // Cleanup function to clear timeout if the component unmounts
      return () => clearTimeout(delayTimeout)
    }, [])

    return <p>{text}</p>
}

export default TypingEffect
