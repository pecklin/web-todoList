import React from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import { createGlobalStyle } from 'styled-components';
import { reduceEachTrailingCommentRange } from 'typescript';
import TodoApp from './TodoApp';

const GlobalStyle = createGlobalStyle`
  body {
    margin-left: 40%;
    background-color: #f5f5dc;
  }
  *:focus {
    outline: 0;
  }
  #q {
    margin-top: 20px;
    font-family: 배찌체;
    font-size: 20px;
    color:#008d62;
    text-allign: center;
    margin-top: 10px;
  }
  #title{
    border: 2px solid ;
    text-allign : center;
    width: 220px;
    height:50px;
    color:#83dcb7;
    font-family: Ink Free;
    font-size: 37px;
    margin-bottom: 20px;
  }
  #obj{
    margin-bottom:10px;
    font-family: 배찌체;
  }
  #button{
    color: green;
    width:70px;
    height:23px;
    border-radius: 20px;
    background-color:#bfff00;
    border:2px solid #bfff00;
    font-family: 메이플스토리;
  }
  #button:hover{
    border: 2px solid #83dcb7;
    background-color: #83dcb7;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);