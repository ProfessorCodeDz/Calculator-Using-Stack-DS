import React from 'react'
import styled from 'styled-components'


export default function StackElement({stack}) {
  return (
    <StackElementsStyles>
        {stack.map((layer,i) => (
            <div className="layer" key={i}>{layer}</div>
        ))}
    </StackElementsStyles>
  )
}

//-------------------------------
const StackElementsStyles = styled.section`
    background-color: #3D0000;
    width: 200px;
    height: 100%;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    .layer:last-child {
      background-color: #220000;
    }
    .layer {
        width: 100%;
        height: calc(100% / 20);
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 2px solid white;
    }
`
