// https://school.programmers.co.kr/learn/courses/30/lessons/120902

// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  const splited = my_string.split(' ');
  let answer = Number(splited[0]);
  splited.forEach((item, index) => {
    if (item === '+') {
      answer += Number(splited[index + 1]);
    }
    if (item === '-') {
      answer -= Number(splited[index + 1]);
    }
  });

  return answer;
}

// eval 사용
var solution = eval;
