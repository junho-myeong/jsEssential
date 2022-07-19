// import시에 경로를 지정해주지 않으면 노드 모듈에서 찾게 된다.
// getType이라는 이름으로 사용한다는 뜻이다.
// import getType from './getType'
import getRandom from './getRandom'

// console.log("hello world")
// console.log(123)

// 데이터 타입 확인(typeof)
// console.log(typeof "hello world") //string
// console.log(typeof 123) //number
// console.log(typeof true) //boolean
// console.log(typeof undefined) // 의도하지 않게 비워놓은값 undefined
// console.log(typeof null) // 의도하게 값을 비워 놓은것 object
// console.log(typeof {}) //object
// console.log(typeof []) //object
// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(undefined))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))


// 산술연산자(aritmetic operator) - +, -, *, /
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(10 % 3)

// 할당연산자(assignment operator) - =
// const a = 2 // const 키워드는 재할당이 불가능 하다
// console.log(a)
// let b = 3
// b = b + 1
// b += 2
// b -= 4
// b *= 8
// b /= 2
// console.log(b)

// 비교연산자 - ==, ====, !==, !=, <, >, <=, >=
// const a = 1
// const b = 1
// console.log(a === b) // === 세개는 일치연산자라고부른다. 비교해서일치하는지를 본다, 데이터 타입도 같고 그 값도 같은지 본다
// const c = 3
// console.log(a === c)
// const d = '1'
// console.log(a == d) // == 두개는 데이터 타입은 무시하고 그 값이 같은지를 확인한다.
// console.log(a !== c) // !== 불일치 연산자
// console.log(a >= c)
// console.log(a <= c)
// function isEqual(x, y) {
//   return x === y
// }
// console.log(isEqual(1, 1))
// console.log(isEqual(1, 2))
// console.log(isEqual(1, '1'))


// 논리 연산자 (logical operator) - ||, &&
// const a = 1 === 3
// const b = 'ab' === 'abc'
// const c = false
// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&:', a && b && c) // &&연산자는 false가 하나 이상이면 false
// console.log('||:', a || b || c) // ||연산자는 true가 하나 이상이면 true
// console.log('!', !a) // !부정 연산자 or not 연산자라고 부른다.
// console.log('!', !1) // !부정 연산자 or not 연산자라고 부른다.
// console.log('!', !0) // !부정 연산자 or not 연산자라고 부른다.


// 삼항연산자
// const a = 1 < 2
// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓') // 삼항연산자 를 사용하면 ifelse문을 좀더 줄일수 잇다.

// 조건문 if Else - 중간 조건을 추가 함으로써 부합한 조건을 만나면 다음 조건 무시 
// const a = getRandom()

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 3) {
//   console.log('a is 3')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }

// 조건문 switch - switch 문에서 나머지 부분을 작성할때는 defalut를 사용해주면 된다
// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2: 
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default: 
//     console.log('rest..')
// }

// 반복문
// for(시작조건; 종료조건, 변화조건) {}
// const ulEl = document.querySelector('ul')
// console.log(ulEl)
// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li')
//   li.textContent = `list - ${i + 1}`
//   if ((i + 1) % 2 === 0) {
//     li.addEventListener('click', function() {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement('li')
//   li.innerHTML = 'hi'
//   console.log(li)
//   ulEl.appendChild(li)
// }





