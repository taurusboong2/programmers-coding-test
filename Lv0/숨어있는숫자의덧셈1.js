// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

const solution = (str) => {
  const numbers = str.split('').filter((e) => Number.isInteger(Number(e)));
  return (result = numbers.reduce((acc, cur) => +cur + acc, 0));
};
