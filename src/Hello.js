import React from 'react';
import "./Hello.css"
function Hello({firstname}) {
  return <p className="myname" >this is a para in hello.js:<strong> {firstname}</strong></p>
}
export default Hello;
