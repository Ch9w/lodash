import './style.css'
import chunk  from "lodash-ts/chunk"
import arrayIncludes from "lodash-ts/_arrayIncludes"
import random from "lodash-ts/random"
import {factorial} from "simple-statistics"
import {shuffle} from "simple-statistics"
import {combinations} from "simple-statistics"

function func1() {
  let arr:string[] = ['foo', 'bar', 'fo1', 'ba1']
  console.log(chunk(arr, 2))
  console.log('foo = ' + arrayIncludes(arr, 'foo'))
  console.log('b1a = ' + arrayIncludes(arr, 'b1a'))
  console.log('baa = ' + arrayIncludes(arr, 'baa'))
  console.log('bar = ' + arrayIncludes(arr, 'bar'))
  const div1 = document.getElementById('div1') as HTMLDivElement
  div1.innerHTML = String(random())
  const div2 = document.getElementById('div2') as HTMLDivElement
  div2.innerHTML = 'div2 = ' + String(factorial(random(8)))
  const div3 = document.getElementById('div3') as HTMLDivElement
  let arr2:string[] = ['foo', 'bar', 'fo1', 'ba1', 'f1o', 'b1a'] 
  div3.innerHTML = 'div3 = ' + String(shuffle(arr2))
  let arr3:number[] = [1,2,3,4,5,6] 
  const div4 = document.getElementById('div4') as HTMLDivElement
  div4.innerHTML = 'div4 = ' + combinations(arr3, 2).join("--")

}
func1()