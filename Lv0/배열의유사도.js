// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

const solution = (s1, s2) => {
  const joinedArrLength = [...s1, ...s2].length;
  const removeDuplication = new Set([...s1, ...s2]);
  return joinedArrLength - [...removeDuplication].length;
};

// 효율적인 풀이
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
