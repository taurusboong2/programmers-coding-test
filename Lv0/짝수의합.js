// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

const solution = (n) => {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) res += i;
  }
  return res;
};

// 신기한 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
