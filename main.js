// import시에 경로를 지정해주지 않으면 노드 모듈에서 찾게 된다.
// getType이라는 이름으로 사용한다는 뜻이다.

// import getRandom from './getRandom'

// console.log("hello world")
// console.log(123)

// 데이터 타입 확인(typeof)
// import getType from './getType'
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


// // 산술연산자(aritmetic operator) - +, -, *, /
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(10 % 3)

// // 할당연산자(assignment operator) - =
// const a = 2 // const 키워드는 재할당이 불가능 하다
// console.log(a)
// let b = 3
// b = b + 1
// b += 2
// b -= 4
// b *= 8
// b /= 2
// b %= 3
// console.log(b)

// 비교연산자 - ==, ====, !==, !=, <, >, <=, >=
// const a = 1
// const b = 1
// console.log(a === b) // === 세개는 일치연산자라고부른다. 비교해서일치하는지를 본다, 데이터 타입도 같고 그 값도 같은지 본다
// const c = 3
// console.log(a === c)
// const d = '1'
// console.log(a == d) // == 두개는 동등연산자, 데이터 타입은 무시하고 그 값이 같은지를 확인한다.
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

// 변수 유효범위(지역번수, 전역변수)
// var, let, const
// let과 const는 변수가 유효하게 동작할수잇는 특정 범위가 잇다 즉 블록 레벨에 유효 범위를 가진다
// var는 함수 레벨에 범위를 가진다, 그래서 의도하지 않은 범위에서 변수가 사용될수 잇고, 그만큼 메모리 누수가 일어 날수잇다.
// function scope() {
//   if (true) {
//     console.log(a) // 호이스팅이 일어 나면서 123이라는 값을 할당하기 전에 선언 만 된것이기 때문에 undefined 된것이다
//     const a = 123
//   }
//   console.log(a)
// }
// scope()


// 형변환(type conversion)

// const a = 1
// const b = '1'

// console.log(a === b)
// console.log(a == b) // 동등연산자(기본적으로 형변환이 일어난다) js에서는 이것을 많이 사용하지 않는다.
// console.log(a === parseInt(b))

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거잣 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if ('') {
//   console.log(123)
// }




// 함수
// 함수 이름이 같이 사용하는 함수 선언 방식(기명함수)
// function sum(x, y) { // x, y는 함수를 선언할때 그에 따라 필요한 값을 매개 해주는 변수라고 해서 매개 변수라 부른다.
//   // console.log(x + y)
//   return x + y;
// }

// const a = sum(1, 3) // 함수가 호출 될때 필요한 값을 인수 즉 아규먼트라고 부른다.
// const b = sum(4, 12)
// console.log(a) // 함수가 호출되는 횟수를 최대한 출여 주는것이 좋다 그래서 함수 결과가 반복적으로 사용할때는 변수에 담아서 사용하는것이 좋다.
// console.log(b)
// console.log(sum(1, 3) + sum(4, 12))

// // 익명 함수로써 함수의 표현을 하는것
// const c = function (x, y) {
//   console.log(x + y)
//   return x + y; // 함수에서 return 이란 키워드는 리턴 키워드 뒤에 잇는 내용이 반환 된다 또 그부분에서 함수가 종료 된다는 것을 의미한다.
// }

// c(1, 4)

// // arguments객체는 매개변수를 지정하지 않아도 함수 내부에서 지정해서 사용할수 잇다.
// // 파라미터가 없어도 arguments객체를 통해 인수로 들어 온 값을 배열로 저장한다.
// function sum1() {
//   console.log(arguments)
//   console.log(arguments[0] + arguments[1])
// }

// sum1(10, 3)


// 화살표 함수
// () => {} vs function () {} - 두개의 차이점은 화살표 함수는 축약 형으로 조금식 줄여갈수 잇다.
// const double = function(x) {
//   return x * 2
// }
// console.log('double:', double(7))

// const doubleArrow = (x) => {
//   return x * 2
// }
// // 축약 1 (중괄호와 리턴 키워드를 제거할수 잇다.)
// const doubleArrow1 = (x) =>  x * 2
// const doubleArrow2 = (x, y) =>  x * 2 * y
// // 축약 2
// const doubleArrow3 = x => x * 2

// // 여러가지 가능한것들
// const doubleArrow4 = x => [1, 2, 3] // 배열 데이터 리턴
// const doubleArrow5 = x => ({
//   name: 'heropy'
// }) // 객체 데이터 리턴

// console.log('doubleArrow:', doubleArrow(7))
// console.log('doubleArrow1:', doubleArrow1(7))
// console.log('doubleArrow1:', doubleArrow2(7, 10))
// console.log('doubleArrow1:', doubleArrow3(7))
// console.log('doubleArrow1:', doubleArrow4(7))
// console.log('doubleArrow1:', doubleArrow5(7))

// // 즉시실행 함수
// // IIFE, Immediately-Invoked Funtion Expression
// const a = 7
// function a1() {
//   console.log('test')
// }
// a1(); // 여기서 세미콜론을 줘야 js엔진이 현재 아래 즉시실행 함수를 실행함수까지 인식해 버리기 때문이다.
// // 함수가 한번 실행되고 나서 한번 실행후 다시 사용할 필요가 없는 경우에 사용한다.
// (function () {
//   console.log(a * 2)
// })();
// (function () {
//   console.log(a * 2)
// }()) // 소괄호를 안쪽에 실행을 해도 함수를 호출 할수 잇게 된다, 이방법이 더 많이 사용된다.



// 호이스팅(Hoistiong)
// 함수 선언부가 유효범위 최상단으로 끌어 올려지는 현상 - 함수에 이름을 보고 대략적으로 유추를 하고 함수 부분은 아래로 다 몰아 놓고 사용하는데 유용하다
// 변수에서도 호이스팅이 적용된다. 예를들어 변수에 선언과 할당을 밑에 해도, 선언 부분이 위로 끌어 올려진다.
// const a = 7
// double()
// function double() {
//   console.log(a * 2)
// }
// // 변수 호이스팅
// console.log(b) // undefinend
// const b = 7

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Timeout 함수를 종료
// const timer = setTimeout(() => console.log('3초'), 3000);
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => clearTimeout(timer)) // timer 함수 종료 할수가 잇다.

// const timer1 = setInterval(() => console.log('interval'), 3000)
// h1El.addEventListener('click', () => clearInterval(timer1))



// callback함수
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 용도로 사용된다
// 예) setTimeout(함수, 시간)

// function timeout(callback) {
//   setTimeout(() => {
//     console.log('3초')
//     callback()
//   }, 3000);
// }
// timeout(() => {
//   console.log('done!')
// }) // 원래상태는 done이 먼저 나오고 3초가 나온다.
