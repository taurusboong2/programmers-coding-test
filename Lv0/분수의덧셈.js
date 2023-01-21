// https://school.programmers.co.kr/learn/courses/30/lessons/120808

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = (denum1, num1, denum2, num2) => {
  let 분자 = denum1 * num2 + denum2 * num1;
  let 분모 = num1 * num2;
  let 최대공약수 = 0;

  for (let i = 1; i <= Math.min(분자, 분모); i++) {
    if (분자 % i === 0 && 분모 % i === 0) {
      최대공약수 = i;
    }
  }

  return [분자 / 최대공약수, 분모 / 최대공약수];
};

// 깔끔한 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
