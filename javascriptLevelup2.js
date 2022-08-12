import _ from 'lodash' // 경로가 명시 되어 잇지 않으면 자동으로 from node_modules 폴더에서 찾아서 가져온다.
import checkType from './getType'
// import {random, user as junho} from './getRandom' // 이름이 명시된 함숙 같은 경우는 중괄호가 필요하다.
import * as R from './getRandom' // *는 와일드 카드라고 불른다.

// ##내보내기 가져오기

// // 자바스크립트 파일은 기본적으로 모듈이 될수가 잇다.(파일을 가져오거나 내보내지 않아도)
// // default, named는 내보내는 통로들이다 default는 이름을 지정하지 않고 기본 통로로 데이터를 내보낸다.
// // default 같은 경우는 함수의 이름을 지정하지 않기 때문에 내보낼때도 함수의 이름을 지정할 필요가 없고
// // import시에도 함수의 이름을 내가 원하는대로 바꿔서 사용이 가능하다.
// // 이름 지정해서 내보내는 경우는 여러가지의 함수를 내보 낼수 잇다.
// console.log(checkType('String'))
// // console.log(random())
// // console.log(user)
// // console.log(junho)
// console.log(R)
// console.log(R.user)
// console.log(R.random())
// console.log(R.default)

// ##LODASH
// const usersA = [
//   {userId: '1', name: 'heropy'},
//   {userId: '2', name: 'neo'}
// ]

// const usersB = [
//   {userId: '1', name: 'heropy'},
//   {userId: '3', name: 'Amy'}
// ]

// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId')) // userId가 바로 고유한 값이다.

// const usersD = _.unionBy(usersA, usersB, 'userId') // 아직 concat으로 합치지 전이라면 합치는 과정에서 같은 값을 제거 해준다.
// console.log('unionBy', usersD)

// const users = [
//   {userId: '1', name: 'heropy1'},
//   {userId: '2', name: 'heropy2'},
//   {userId: '3', name: 'heropy3'},
//   {userId: '4', name: 'heropy4'},
//   {userId: '5', name: 'heropy5'}
// ]
// const foundUser = _.find(users, {name: 'heropy2'})
// const foundUserIndex = _.findIndex(users, {name: 'heropy2'})
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {name: 'heropy2'})
// console.log(users)

// ##JSON(서버 통신과정에서 데이터를 주고 받을때 가장 많이 사용한다.)
// JSON에서 문자 데이터를 나타 낼때는 무조건 ""로 관리해야한다.
// JSON은 기본 적으로 문자데이터를 주고 받는 것이다.
// 주고 받은 후에 다시 객체화 시켜주는것이다.
// import myData from './myData.json' // json은 정확하게 문자데이터 이고 이것을 받을때 json포맷을 통해서 객체 데이터로 바꾸는것이다.
// console.log(myData)
// const user = {
//   // js에서 속성 이름은 ''로 묶어도 상관 없다(특수기호라든지 예외 기호 사용시에 ''를 사용해야한다.)
//   name: 'heropy',
//   age: 85,
//   emails: [
//     'junho@naver.com',
//     'junho@gmail.com'
//   ]
// }
// console.log('user', user)

// const str = JSON.stringify(user) //JSON객체는 전역 객체이다, 문자화 시켜주는것이다.
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)


// ##Storage
// const user = {
//   // js에서 속성 이름은 ''로 묶어도 상관 없다(특수기호라든지 예외 기호 사용시에 ''를 사용해야한다.)
//   name: 'heropy',
//   age: 85,
//   emails: [
//     'junho@naver.com',
//     'junho@gmail.com'
//   ]
// }

// // Local Storage - 브라우저에 저장되는 저장소 이다(데이터가 반영구적으로 저장된다.)
// localStorage.setItem('user', JSON.stringify(user))
// console.log(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('user')))
// const str = localStorage.getItem('user')
// console.log(str)
// const obj = JSON.parse(str)
// obj.age = 20
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))
// localStorage.removeItem('user')

// ##omdbapi
// Query String: 문자를 가지고 검색 한다는 뜻이다.(속성과 값이 파라미터라고도 불린다.)
// 사용법 주소?속성=값&속성=값&속성=값
// axios는 http주소를 통해 데이터를 가져 올수 잇게 해주는 패키지 이다.
// 데이터를 가져와서 그 데이터를 화면에 뿌려 줄수가 잇다.
// import axios from 'axios'
// function fetchMovies() {
//   axios // http요청보낼수 잇게 해주고, 응답을 받을수 잇다.
//     .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//     .then((res) => {
//       console.log(res.data.Search[0])
//       document.querySelector('h1').textContent = res.data.Search[0].Title
//       document.querySelector('img').setAttribute('src', res.data.Search[0].Poster)
//     })
// }
// fetchMovies()


// ## 정규표현식
