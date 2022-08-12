import _ from 'lodash'
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
// const numbers = [1, 2, 3, 4] // 배열 내부에 데이터를 각각의 요소라고 부른다, 또는 배열의 아이템이라고 부른다.
// const fruits = ['apple', 'banana', 'cherry']

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
// console.log(a) // undefined - a라는 변수에 데이터를 담는것이 아니기 때문에 undefined가 발생한다.

// const b = fruits.map((item, index) =>  // map도 내부에 아이템 갯수만큼 callback 함수가 반복적으로 실행된다.
//   (`${item}-${index}`) // map은 배열의 내부의 갯수만큼 그 값을 배열 데이터에 담아준다.
// )
// console.log(b) // b 라는 변수에 배열 데이터를 담기 때문에 그 배열 데이터가 나온다.

// const c = fruits.map((item, index) => ({id: index,
//   name: item}) // map도 내부에 아이템 갯수만큼 callback 함수가 반복적으로 실행된다.
//    // map은 return 해준는 것이다.
// )
// console.log(c[0].name)

// const a1 = numbers.map(number => number < 3)
// console.log(a1)

// const b1 = numbers.filter(number => number < 3) // filter 또한 배열에 아이템 갯수 만큼 callback 함수를 실행하여 조건에 부합하는 값을 새로운 배열에 담고 그걸 return해준다.
// console.log(b1)

// const c1 = fruits.find(fruit => /^b/.test(fruit))// 정규표현식 ^는 시작부분을 말한다.)
// console.log(c1)

// let bananaIdx;
// fruits.forEach(function(item, index) {
//   if (item.indexOf('banana') >= 0) {
//     bananaIdx = index
//   }
// })
// console.log(fruits[bananaIdx])

// const b = fruits.findIndex(fruit => {
//   return /^b/.test(fruit) // 정규표현식 ^는 시작부분을 말한다.
// })
// console.log(b)

// const a2 = numbers.includes(3)
// console.log(a2)
// const b2 = fruits.includes('heropy')
// console.log(b2)

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
// const userAge = { // userAge는 메모리에 주소만 가지고 잇다. 즉 참조형 데이터 이다. primitve와 referenc타입 변수를 구분해야한다.
//   name: 'heropy',
//   age: 85,
//   email: 'bcd@naver.com'
// }

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
// console.log(target === target2)

// const a = {k: 123}
// const b = {k: 123}
// console.log(a === b) // 참조형 데이터의 특징으로 메모리의 다른 주소를 담고 잇어서 false라고 뜨는것이다.


// const keys = Object.keys(userAge)
// console.log(keys)

// console.log(userAge['email']) // 이것은 배열과 다르게 객체 데이터의 인덱싱 방법이다.

// const values = keys.map(key => userAge[key])
// console.log(values)

// 구조분해 할당 (Destructuring assignment)
// 구조분해 할당으로 값을 꺼낼수도 잇다.
// 키와 벨류가 많아 지면 꺼내기 힘들지만, 필요한것만 꺼낼수 잇다.
// const user = { // userAge는 메모리에 주소만 가지고 잇다. 즉 참조형 데이터 이다. primitve와 referenc타입 변수를 구분해야한다.
//   name: 'heropy1',
//   age: 85,
//   email: 'bcd@naver.com'
// }

// const {name, age, email, address} = user
// console.log(`사용자의 이름은 ${name}`)
// console.log(`${name}의 나이는 ${age}입니다.`)
// console.log(address)

// const {name: heropy, age, email, address = 'korea'} = user // address에 이렇게 기본값을 줄수도 잇다.
// console.log(`사용자의 이름은 ${name}`)
// console.log(`${name}의 나이는 ${age}입니다.`)
// console.log(address)
// console.log(`${heropy}`)

// const fruits = ['apple', 'banana', 'cherry']
// const [a, b, c, d] = fruits // 배열같은경우는 key, value형태가 아니기 때문에 순서대로 인덱싱이 된다.
// console.log(a, b, c, d)
// const [, f] = fruits // 배열에서 두번째아이템만 인덱싱 하기 위한것이다.
// console.log(f)

// 전개연산자(spread)
// const fruits = ['apple', 'banana', 'cherry', 'orange']
// console.log(fruits)
// console.log(...fruits) // 전개 연산자이다, 배열 데이터를 쉼표로 구분하여 전개하는것을 말한다.

// function toObject(a, b, ...c) { // 매개변수에서도 전개 연산자를 사용할수 잇다, 나머지 매개 변수라고 부른다.
//   return {
//     a: a,
//     b, // 속성의 이름과 변수에 이름이 같으면 하나만 남겨 놔도 된다.
//     c: c
//   }
// }

// console.log(toObject(...fruits)) // 배열 데이터를 각각으로 나눠서 전개해서 들어가게 된다.(즉 쉼표로 구분된 값으로 된다.)
// console.log(toObject(fruits[0], fruits[1], fruits[2])) 

// const toObject1 = (a, b, ...c) => ({a, b, c})
// console.log(toObject1(...fruits)) // 배열 데이터를 각각으로 나눠서 전개해서 들어가게 된다.(즉 쉼표로 구분된 값으로 된다.)
// console.log(toObject1(fruits[0], fruits[1], fruits[2])) 

// 데이터 불변성(Imutability)
// 원시 데이터(primitive): String, Number, Boolean, undefiend, null
// 참조형 데이터(reference): object, array, function
// 원시 데이터의 불변성 - 원시데이터는 다른 변수에 할당할때 메모리가 바뀔수도잇다.
// let a = 1 // 1번 메모리
// let b = 4 // 2번 메모리
// console.log(a, b, a === b) // a와b가 서로 바라보는 메모리 주소가 다르기 때문에 다르다고 보는것이다.
// b = a // a가 바라보는 주소를 b에게 할당하기 때문에 같다고 나오는것이다.
// console.log(a, b, a === b)
// a = 7 // 1번 메모리가 아니고 3번 메모리를 바라본다.
// console.log(a, b, a === b)
// let c = 1 // c는 기존의 숫자 데이터 1 을 바라보게 된다. 이게 바로 데이터 불변성이다.
// console.log(b, c, b === c) // 원시 데이터는 새롭게 만들어 지는것이 아니고 항상 불변한다.

// 참조 데이터의 불변성(참조형 데이터는 불변성이 없고, 가변성이 잇다.), 다른쪽도 수정된다.
// let a1 = {k: 1}
// let b1 = {k: 1}
// console.log(a1, b1, a1 === b1)
// a1.k = 7
// b1 = a1
// console.log(a1, b1, a1 === b1)
// a1.k = 2
// console.log(a1, b1, a1 === b1)
// let c1 = b1
// console.log(a1, b1, c1, a1 === c1)
// a1.k = 9
// console.log(a1, b1, c1, a1 === c1)

// 얕은 복사(Shallow copy), 깊은 복사(deep copy)
const user = {
  name: 'heropy',
  age: 85,
  emails: ['wnsgh@naver.com']
}
// const copyUser = user // 같은 주소를 보고 잇기 떄문에 한곳에서 바꾸면 같이 바뀌게 된다.
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyuser', copyUser)

// console.log('-------------')
// console.log('-------------')

// 이렇게 같이 바뀌는것을 막기 위해 복사라는 개념을 사용한다.
// const copyUser1 = Object.assign({}, user) // 같은 메모리를 바라 보는게 아니고 새로운 메모리 주소를 담는것이다.
// console.log(copyUser1)
// console.log(copyUser1 === user)
// user.age = 22
// console.log('user', user)
// console.log('copyuser1', copyUser1)


// const copyUser2 = {...user} // 전개 연산자와 새로운 객체를 만든다는 뜻이다.
// console.log(copyUser2 === user)
// console.log(copyUser2)
// user.age = 22
// console.log(copyUser2)

// 얕은 복사(겉 표면만 복사하는것이다.)
// user.emails.push('neo@naver.com') // user안에 잇는 emails라는 참조형 데이터는 복사한것이 아니다.
// console.log(user.emails === copyUser2.emails)
// console.log(user)
// console.log(copyUser2)

// 깊은복사(안에 내부까지 복사하는것이다.) - 참조형 변수안에 또다른 참조형 변수가 잇다면 깊은 복사로 하는것이 안전하다.
// const copyUser3 = _.cloneDeep(user)
// console.log(copyUser3 === user)
// user.emails.push('neo@naver.com') // user안에 잇는 emails라는 참조형 데이터는 복사한것이 아니다.
// console.log('user', user)
// console.log('copyuser3', copyUser3)