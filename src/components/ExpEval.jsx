import React,{useState} from 'react'
import styled from 'styled-components'


export default function ExpEval({stack,push,pop,getTop,clear}) {
    const [finalResult,setFinalResult] = useState('')
    //to postfix expression
    function prec(c) {
        if(c == '^')
            return 3;
        else if(c == '/' || c=='*')
            return 2;
        else if(c == '+' || c == '-')
            return 1;
        else
            return -1;
    }
    function infixToPostfix(s) {
        let st = []; //For stack operations, we are using JavaScript built in stack
        let result = [];
        for(let i = 0; i < s.length; i++) {
            let c = s[i];
            // If the scanned character is
            // an operand, add it to output string.
            if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
                result.push(c);
            // If the scanned character is an
            // ‘(‘, push it to the stack.
            else if(c == '(')
                st.push('(');                  
            // If the scanned character is an ‘)’,
            // pop and to output string from the stack
            // until an ‘(‘ is encountered.
            else if(c == ')') {
                while(st[st.length - 1] != '(')
                {
                    result.push(st[st.length - 1]);
                    st.pop();
                }
                st.pop();
            }
            //If an operator is scanned
            else {
                while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                    result.push(st[st.length - 1]);
                    st.pop(); 
                }
                st.push(c);
            }
        }
        // Pop all the remaining elements from the stack
        while(st.length != 0) {
            result.push(st[st.length - 1]);
            st.pop();
        }
        console.log(result)
        clear()
        result.forEach((r,i) => {
            push(r,i)
        });
    }

    // postfix calculation
    function postfixEval( expr ) {
        let stackArr = [];
        const arr = expr.filter((el)=>el !== " " )
        for(var i = 0 ; i < arr.length ; i++){
            if(isNaN(arr[i])){
                var y = stackArr.pop();
                var x = stackArr.pop();
                const result = eval(x+arr[i]+y)
                stackArr.push(result)
            } else {
                stackArr.push( parseFloat(arr[i]) );
            }
        }
        setFinalResult(stackArr[0])
        clear()
        push(stackArr[0])
    }    
    return (
        <ExpEvalStyles>
            <h2 className='title'>Expression Evaluation :</h2>
            <h2>Expression: <span>{stack}</span></h2>
            <h2>Top Element : <span>{getTop()}</span></h2>
            <h2>Result: <span>{finalResult}</span></h2>
            <button onClick={() => infixToPostfix(stack)}>Infix To Postfix</button>
            <br />
            <button onClick={() => postfixEval(stack)}>Calc</button>
        </ExpEvalStyles>
    )
}

//------------------------------------------------
const ExpEvalStyles = styled.section`
    padding: 30px;
    flex: 1;
    .title {
        font-size: 40px;
        color: #d6d6d6;
        width: 100%;
    }
    button {
        height: 40px;
        width: 200px;
        font-size: 18px;
        background-color: red;
        color: white;
        font-weight: bold;
        border: none;
        cursor: pointer;
        margin: 10px 0;
        border-radius: 5px;
    }
    h2 {
        margin: 15px 0;
        word-wrap: break-word;
        color: #ff2f2f;
        span {
            color: white;
            font-size: 20px;
        }
    }
    @media(max-width: 1000px) {
        .title {
            font-size: 30px;
        }
        h2 {
            max-width: 300px;
        }
    }

`