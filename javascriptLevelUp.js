// JS데이터

// 기호를 통해서 데이터를 생성하는 방식을 리터럴 방식이라고 부른다.
// String: "", '' -> "",'' 문자데이터를 만들때 따옴표 사용하는것이 리터럴 방법이다.
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Obejct: {}

// String
// const result = 'Hello world!'
// const result1 = 'Hello world!'.indexOf('heropy')
// console.log(result.indexOf('world'))
// console.log(result1)
// const str = '0123'
// console.log(str.length) // length는 메서드가 아니고 properties이다.
// console.log(result.slice(6, 11)) // (start index, end index) 단, end index는 맨 마지막 직전에 해당하는 index까지 추출한다.
// console.log(result.replace('world', 'heropy'))
// console.log(result.replace(' world!', ''))
// const test = 'wnsgh9166@naver.com'
// console.log(test.match(/.+(?=@)/)[0]) // 정규표현식(/.+(?=@)/) - .은임의의 한글자, + 최대한 많이, @ 앞에를 뜻한다.
// console.log(test.split('@')[0])
// const test2 = '      Hello world   '
// console.log(test2.trim()) // trim이라는 메서드를 통해서 앞,뒤에서 시작하는 모든 공백 문자를 제거한다는 뜻이다.

// Number
// import getType from './getType'
// const pi = 3.141592653858979
// console.log(pi)

// const str  = pi.toFixed(2) //toFixed는 숫자 데이터에 사용할수 잇는 함수이고, 소수점 몇째 짜리 까지 나타낼것인지이다.
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str) // parseInt와 parseFloat는 JS에서 제공하는 전역함수잇다.
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer)
// console.log(typeof float)

// console.log('abs: ', Math.abs(-12))
// console.log('min:', Math.min(2, 8))
// console.log('max:', Math.max(2, 8))
// console.log('ceil: ', Math.ceil(3.14))
// console.log('floor: ', Math.floor(3.14))
// console.log('round: ', Math.round(3.14)) // 반올림
// console.log('rnadom: ', Math.random())

// Array(배열)
// 인덱스란 배열 데이터 내부에 특정한 데이터에 접근하기 위한 숫자이다.
const numbers = [1, 2, 3, 4] // 배열 내부에 데이터를 각각의 요소라고 부른다, 또는 배열의 아이템이라고 부른다.
const fruits = ['apple', 'banana', 'cherry']

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length) // 배열 데이터의 요소가 채워져잇는지 확인할수 잇다.
// console.log(numbers.concat(fruits)) // concat 메서드는 원본의 배열 데이터가 손상 되지 않는다.

// fruits.forEach(function(item, index, array) { // forEach는 배열 데이터의 아이템 갯수만큼 callback이 실행 되는것이다.
//   console.log(item, index, array)
// })

// const a = fruits.forEach((item, index) => { // forEach는 배열 데이터의 아이템 갯수만큼 callback이 실행 되는것이다.
//   console.log(`${item}-${index}`)
// })
// console.log(a) // undefined

// const b = fruits.map((item, index) =>  // map도 내부에 아이템 갯수만큼 callback 함수가 반복적으로 실행된다.
//   (`${item}-${index}`) // map은 return 해준는 것이다.
// )
// console.log(b)

// const c = fruits.map((item, index) => ({id: index,
//   name: item}) // map도 내부에 아이템 갯수만큼 callback 함수가 반복적으로 실행된다.
//    // map은 return 해준는 것이다.
// )
// console.log(c[0].name)

// const a = numbers.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => number < 3) // filter 또한 배열에 아이템 갯수 만큼 callback 함수를 실행하여 조건에 부합하는 값을 새로운 배열에 담고 그걸 return해준다.
// console.log(b)

// const a = fruits.find(fruit => /^b/.test(fruit))// 정규표현식 ^는 시작부분을 말한다.)
// console.log(a)

// const b = fruits.findIndex(fruit => {
//   return /^b/.test(fruit) // 정규표현식 ^는 시작부분을 말한다.
// })
// console.log(b)

// const a = numbers.includes(3)
// console.log(a)
// const b = fruits.includes('heropy')
// console.log(b)

// 원본이 수정되는 메서드들
// numbers.push(5) // 배열에 가장 뒤쪽 부분에 데이터를 삽입하는것이다.
// console.log(numbers)
// numbers.unshift(0) // 배열에 가장 앞쪽 부분에 데이터를 삽입하는것이다.
// console.log(numbers)
// console.log(numbers.reverse())
// console.log(fruits.reverse())
// console.log(numbers.splice(2, 0, 999)) // 첫번째 파라미터는 인덱스 번호, 두번째 인수는는 지울 갯수이다, 3번째 인수는 새롭게 숫자 데이터를 삽입하라는 뜻이다.  

// 객체
// 정적(static) 메서드: prototype이 붙어 잇지 않은 메서드를 말한다, 정적 메서드는
// 자바에서 static 메서드랑 같은 것이다. 즉, 인스턴스를 만들어서 사용할수 잇는 메서드가 아니고, 그 클래스에 직접 접근해서 사용해야 하는 메서드 이다.
// 인스턴스 메서드는 인스턴스를 만들어서 그 안에 prototype에 선언 함으로써 함수를 한번 선언 하고 계속 사용할수 잇는것이다.
const userAge = { // userAge는 메모리에 주소만 가지고 잇다. 즉 참조형 데이터 이다. primitve와 referenc타입 변수를 구분해야한다.
  name: 'heropy',
  age: 85,
  email: 'bcd@naver.com'
}

// const userEmail = {
//   name: 'heropy',
//   email: 'abc9166@naver.com'
// }

// const target = Object.assign(userAge, userEmail)
// const target2 = Object.assign({}, userAge, userEmail) // 파라미터로 여러개를 받을수 잇다.
// console.log(target)
// console.log(userAge)
// console.log(target2)
// console.log(target === userAge)

// const a = {k: 123}
// const b = {k: 123}
// console.log(a === b) // 참조형 데이터의 특징으로 메모리의 다른 주소를 담고 잇어서 false라고 뜨는것이다.


const keys = Object.keys(userAge)
console.log(keys)

console.log(userAge['email']) // 이것은 배열과 다르게 객체 데이터의 인덱싱 방법이다.

const values = keys.map(key => userAge[key])
console.log(values)


