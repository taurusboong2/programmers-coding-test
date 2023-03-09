// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// 숫자와 "Z"로 이루어진 문자열 s가 주어집니다. "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 문자열에 있는 숫자를 차례대로 더한 값을 반환하는 solution 함수를 작성하세요.

function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) {
    arr.splice(arr.indexOf('Z') - 1, 2);
  }
  return arr.reduce((a, b) => a + Number(b), 0);
}
