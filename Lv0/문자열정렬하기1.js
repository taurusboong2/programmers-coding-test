// https://school.programmers.co.kr/learn/courses/30/lessons/120850

// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

const solution = (str) =>
  [...str]
    .filter((e) => Number.isInteger(Number(e)))
    .map((e) => Number(e))
    .sort((a, b) => a - b);

// 짧은 풀이 1
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// 짧은 풀이 2
function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
