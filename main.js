// import시에 경로를 지정해주지 않으면 노드 모듈에서 찾게 된다.
// getType이라는 이름으로 사용한다는 뜻이다.
import getType from './getType'

// console.log("hello world")
// console.log(123)

// 데이터 타입 확인(typeof)
console.log(typeof "hello world") //string
console.log(typeof 123) //number
console.log(typeof true) //boolean
console.log(typeof undefined) // 의도하지 않게 비워놓은값 undefined
console.log(typeof null) // 의도하게 값을 비워 놓은것 object
console.log(typeof {}) //object
console.log(typeof []) //object
console.log(getType(123))
console.log(getType(false))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))
