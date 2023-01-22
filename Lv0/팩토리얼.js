// https://school.programmers.co.kr/learn/courses/30/lessons/120848

// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

const solution = (n) =>
  [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800].filter(
    (val) => val <= n
  ).length;

// 더 나은 풀이
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}

// 더 나은 풀이2
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}

//더 나은 풀이3
let factorial = [1, 1];
for (let i = 2; n > factorial[i - 1]; i++) factorial[i] = factorial[i - 1] * i;

return factorial[factorial.length - 1] === n
  ? factorial.length - 1
  : factorial.length - 2;
