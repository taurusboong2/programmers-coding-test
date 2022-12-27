// https://school.programmers.co.kr/learn/courses/30/lessons/120839

// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp
// 가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

const solution = (rsp) => {
  const result = [];
  [...rsp].forEach((e) => {
    if (e === '2') result.push('0');
    if (e === '0') result.push('5');
    if (e === '5') result.push('2');
  });
  return result.join('');
};

// 효율적인 풀이
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}
