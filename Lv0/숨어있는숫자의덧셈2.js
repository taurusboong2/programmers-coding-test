// https://school.programmers.co.kr/learn/courses/30/lessons/120864

// 문자열 `my_string`이 매개변수로 주어집니다. `my_string`은 소문자, 대문자, 자연수로만 구성되어있습니다. `my_string`안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

const solution = (my_string) =>
  my_string
    .split(/[a-zA-Z]/)
    .map(Number)
    .reduce((acc, cur) => (acc += cur), 0);

// 다른 사람의 조금 더 나은 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
