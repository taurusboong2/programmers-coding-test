// https://school.programmers.co.kr/learn/courses/30/lessons/120813

// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (n) => {
  const arr = [...Array(n + 1).keys()];
  return arr.filter((e) => e % 2 === 1).sort((a, b) => a - b);
};
