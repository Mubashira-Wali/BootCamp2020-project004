import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>hello from {name} age is {age-10}
  <h3>New heading for list</h3>
  <ul>
    <li>list content</li>
    <li>list content</li>
    <li>list content</li>
    <li>list content</li>
  </ul>
  <ol>
    <li>list content</li>
    <li>list content</li>
    <li>list content</li>
    <li>list content</li>
  </ol>
  <br/>
  <Hello firstname={name}></Hello>
  </div>
}

export default App;
