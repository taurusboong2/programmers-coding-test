// https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
// [1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.
// [2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.

function solution(common) {
  if (typeof common !== 'object') return;
  let result;
  let rest;
  if (common[1] - common[0] === common[2] - common[1]) {
    rest = common[1] - common[0];
    result = common.at(-1) + rest;
  } else {
    rest = common[1] / common[0];
    result = common.at(-1) * rest;
  }
  return result;
}
