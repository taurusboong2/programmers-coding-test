// https://school.programmers.co.kr/learn/courses/30/lessons/120824

// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = (nums) => {
  const even = nums.filter((e) => e % 2 === 0).length;
  const odd = nums.filter((e) => e % 2 === 1).length;
  return [even, odd];
};
