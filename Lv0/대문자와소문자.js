// https://school.programmers.co.kr/learn/courses/30/lessons/120893

// 문자열 str이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = (str) =>
  [...str]
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join('');
