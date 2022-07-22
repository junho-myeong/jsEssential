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
const pi = 3.141592653858979
console.log(pi)

const str  = pi.toFixed(2) //toFixed는 숫자 데이터에 사용할수 잇는 함수이고, 소수점 몇째 짜리 까지 나타낼것인지이다.
console.log(str)
console.log(typeof str)

const integer = parseInt(str) // parseInt와 parseFloat는 JS에서 제공하는 전역함수잇다.
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer)
console.log(typeof float)

console.log('abs: ', Math.abs(-12))
console.log('min:', Math.min(2, 8))
console.log('max:', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14))
console.log('floor: ', Math.floor(3.14))
console.log('round: ', Math.round(3.14)) // 반올림
console.log('rnadom: ', Math.random())

