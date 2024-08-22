import React, { useState, useEffect } from 'react';

function Intro() {
  const TypingEffect = () => {
    const [text, setText] = useState('');
    const actualText = "I'm a Full Stack Developer skilled in building scalable web applications, specializing in front-end and back-end development to deliver efficient functionality and seamless user experiences.";
    const speed = 13; // Inversely proportional to typing speed
    const startDelay = 500; // Delay before typing starts (in milliseconds)

    useEffect(() => {
      const startTyping = () => {
        let i = 0;
        let temp = '';

        const typer = () => {
          if (i < actualText.length) {
            temp += actualText.charAt(i);
            setText(temp);
            i++;
            setTimeout(typer, speed);
          }
        };

        typer();
      };

      const delayTimeout = setTimeout(startTyping, startDelay);

      // Cleanup function to clear timeout if the component unmounts
      return () => clearTimeout(delayTimeout);
    }, []);

    return <p>{text}</p>;
  };

  return (
    <div>
      <div style={{ width: '80%', fontSize: '19px', paddingTop: '25px', textAlign: 'justify', opacity: '0.8' }}>
        <TypingEffect />
      </div>
    </div>
  );
}

export default Intro;
