import React,{ useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Form from './components/Form'
import StackElement from './components/StackElement'
import ExpEval from './components/ExpEval'

function App() {
  const [stack,setStack] = useState([])
  function push(val,i=1){
    setTimeout(() => {
      setStack(current => [...current, val])
    },i * 1000)
  }
  function pop(){
    setStack(current => current.filter(c => current.indexOf(c) != current.length-1))
  }
  function getTop(){
    return stack[stack.length - 1]
  }
  function clear(){
    setStack([])
  }

  return (
    <AppStyle className="App container">
      <header>
        <h2>Calculator using Stack DS</h2>
        <a target="_blank" href='https://riadz.pages.dev/'><h2>My Portfolio</h2></a>
      </header>
      <Form push={push} clear={clear}/>
      <main>
        <StackElement stack={stack}/>
        <ExpEval stack={stack} push={push} pop={pop} getTop={getTop} clear={clear}/>
      </main>
      <footer>
        Riad. Z - 2023
      </footer>
    </AppStyle>
  )
}

export default App

// Styles -----------------------------------------------------
const AppStyle = styled.div`
  header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: white;
      background-color: #161616;
      padding: 10px 20px;
      border-radius: 5px;
    }
    h2 {
      font-size: 30px;
    }
  }
  main {
    display: flex;
    background-color: #171717;
    height: 500px;
  }
  footer {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  @media(max-width: 1000px) {
    header{
      h2 {
        font-size: 20px;
      }
    } 
  }

`
