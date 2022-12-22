// https://school.programmers.co.kr/learn/courses/30/lessons/120906

// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

const solution = (n) => {
  const arr = String(n).split('');
  return arr.reduce((acc, curr) => acc + curr * 1, 0);
};

// 신기한 풀이
function solution(n) {
  return (n + '')
    .split('')
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}

// 신기한 풀이2
function solution(n) {
  return (n + '').split('').reduce((a, b) => +b + a, 0);
}
