// https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) =>
  numbers.reduce((prev, curr) => prev + curr) / numbers.length;
