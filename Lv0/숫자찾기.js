// https://school.programmers.co.kr/learn/courses/30/lessons/120904

// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

const solution = (num, k) => {
  const arr = [...(num + '')];
  return arr.includes(k + '') ? arr.indexOf(k + '') + 1 : -1;
};

// 조금 더 나은 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split('')
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

// 가독성이 더 좋은 풀이
function solution(num, k) {
  let ind = ('' + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}
