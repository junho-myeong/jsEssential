import _ from 'lodash' // 경로가 명시 되어 잇지 않으면 자동으로 from node_modules 폴더에서 찾아서 가져온다.
import checkType from './getType'
// import {random, user as junho} from './getRandom' // 이름이 명시된 함숙 같은 경우는 중괄호가 필요하다.
import * as R from './getRandom' // *는 와일드 카드라고 불른다.

// 내보내기 가져오기

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

const usersA = [
  {userId: '1', name: 'heropy'},
  {userId: '2', name: 'neo'}
]

const usersB = [
  {userId: '1', name: 'heropy'},
  {userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // userId가 바로 고유한 값이다.

const usersD = _.unionBy(usersA, usersB, 'userId') // 아직 concat으로 합치지 전이라면 합치는 과정에서 같은 값을 제거 해준다.
console.log('unionBy', usersD)



