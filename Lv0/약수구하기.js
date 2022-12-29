// https://school.programmers.co.kr/learn/courses/30/lessons/120897

// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (n) =>
  [...Array(n + 1).keys()].filter((e) => n % e === 0).sort((a, b) => a - b);
