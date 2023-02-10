// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

const solution = (i, j, k) => {
  const arr = [
    ...Array(j - i + 1)
      .fill(0)
      .map((e, index) => i + index + '')
      .join(''),
  ];

  return arr.filter((e) => e === k + '').length;
};
