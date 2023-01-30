// https://school.programmers.co.kr/learn/courses/30/lessons/120890

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 못풀었다,,, 해당 문제는 검색한 것임..
const solution = (array, n) => {
  const min = Math.min(...array.map((a) => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === min);
};
