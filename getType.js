export default function (data) { // 이름을 따로 지정하지 않는 기본 통로(함수 이름을 지정하지 않아도 된다.)
  return Object.prototype.toString.call(data).slice(8, -1)
}

// 기본적으로 하나의 모듈에서 하나의 내보내기만 가능하다.
// export default 123