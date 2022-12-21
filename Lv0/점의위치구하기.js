// https://school.programmers.co.kr/learn/courses/30/lessons/120841

// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// - x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// - x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// - x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// - x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 `dot`이 매개변수로 주어집니다. 좌표 `dot`이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

const solution = (dot) => {
  let answer;
  const [x, y] = dot;

  if (x > 0 && y > 0) answer = 1;
  if (x < 0 && y > 0) answer = 2;
  if (x < 0 && y < 0) answer = 3;
  if (x > 0 && y < 0) answer = 4;

  return answer;
};

// 신기한 풀이
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
