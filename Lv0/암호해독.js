// https://school.programmers.co.kr/learn/courses/30/lessons/120892

// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// - 암호화된 문자열 `cipher`를 주고받습니다.
// - 그 문자열에서 `code`의 배수 번째 글자만 진짜 암호입니다.
// 문자열 `cipher`와 정수 `code`가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = (cipher, code) =>
  [...cipher].filter((_e, i) => (i + 1) % code === 0).join('');
