// https://school.programmers.co.kr/learn/courses/30/lessons/120905

// 정수 `n`과 정수 배열 `numlist`가 매개변수로 주어질 때, `numlist`에서 `n`의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (n, arr) => arr.filter((e) => e % n === 0);
