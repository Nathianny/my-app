import React, { useState } from 'react';

function CorBotao() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        position: 'absolute',
        top: '40%',
        left: '40%',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: isHovered ? 'orange' : 'blue', 
        color: 'black',
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      BOA NOITE!!
    </button>
  );
}

export default CorBotao;
