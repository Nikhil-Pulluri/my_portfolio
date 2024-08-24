import React from 'react';
import TypingEffect from '../../Utilities/TypingEffect';

function Intro() {

  return (
    <div>
      <div style={{ width: '100%', fontSize: '21px', paddingTop: '25px', opacity: '0.8', fontWeight: "bold" }}>
        <TypingEffect text="Full-Stack Web3 Developer"/>
      </div>
    </div>
  );
}

export default Intro;
