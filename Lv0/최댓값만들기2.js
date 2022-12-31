// https://school.programmers.co.kr/learn/courses/30/lessons/120862

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b);
  return Math.max(sorted[0] * sorted[1], sorted.at(-1) * sorted.at(-2));
};
