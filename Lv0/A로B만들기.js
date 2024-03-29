// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

const solution = (before, after) => {
  const b = [...before].sort().join('');
  const a = [...after].sort().join('');

  return b === a ? 1 : 0;
};
