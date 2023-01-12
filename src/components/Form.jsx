import React,{useState} from 'react'
import styled from 'styled-components'


export default function ({push,clear}) {
    const [txt,setTxt] = useState('')
    
    function handleClick(){
        let operators = []
        let numbers = []

        // get operators
        txt.split('').forEach(t => {
            if(t == '+' || t == '-' || t == '*' || t == '/' || t == '(' || t == ')'){
                operators.push(t)
            }
        }) 
        // get numbers   
        txt.replaceAll('+',' $ ').replaceAll('-',' $ ').replaceAll('*',' $ ').replaceAll('/',' $ ').replaceAll('(',' $ ').replaceAll(')',' $ ').split(' ').forEach(el => {
            if(el){
                numbers.push(el)
            }
        })
        // combine operators with numbers
        operators.forEach(operator => {
            numbers[numbers.indexOf('$')] = operator
        })
        if(numbers.length <= 20){
            clear()
            numbers.forEach((t,i) => {
                push(t,i)
            })
        }else {
            alert("Max elements is 20")
        }
    }
    return (
        <FormStyles>
            <input maxLength={100} type="text" onChange={(e) => setTxt(e.target.value)} value={txt}/>
            <button onClick={handleClick}>Add</button>
        </FormStyles>
    )
}

// -------------------------------
const FormStyles = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    input {
        width: 400px;
        height: 40px;
        border: none;
        outline: none;
        padding-left: 20px;
        flex: 1;
        font-size: 20px;
    }
    button {
        height: 40px;
        width: 120px;
        font-size: 18px;
        background-color: red;
        color: white;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
`