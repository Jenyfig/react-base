
//第一步
import React from "react";
import ReactDOM from "react-dom";

let a =10
let res=<div>妈妈好</div>
let obj={
  "title":'杨晓珍',
  "name":"花花"
}
let arr=[
  <h1>花花最美</h1>,
  <h2>走,跑路去</h2>
]

let aoo=false

const arrStr=['南岸','明明','丢丢']

// const nameArr=[]
// arrStr.forEach(item=>{
//   const temp=<div>{item}</div>
//   nameArr.push(temp)
// })

// arrStr.map(item=>{
// return item+"~~"
// })


//第三步:渲染cnpm i  react react-dom -s
ReactDOM.render(
<div>
  {a+3},
  <hr/>
  {res}
  <hr/>
{aoo?'条件为假':"条件为畜生"}
  <hr/>
{arr}
 <hr/>
{arrStr.map(item=>{
  return <h1>{item}</h1>
  })},

</div>,
document.getElementById('app'))


