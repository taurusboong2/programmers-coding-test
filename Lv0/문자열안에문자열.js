// https://school.programmers.co.kr/learn/courses/30/lessons/120908

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

const solution = (str, check) => (str.includes(check) ? 1 : 2);

// 신기한 풀이
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
