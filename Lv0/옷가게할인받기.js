// https://school.programmers.co.kr/learn/courses/30/lessons/120818

// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

const solution = (n) => {
  if (n >= 1e5 && n < 3e5) {
    return (n * 0.95) << 0;
  } else if (n >= 3e5 && n < 5e5) {
    return (n * 0.9) << 0;
  } else if (n >= 5e5) {
    return (n * 0.8) << 0;
  } else {
    return n;
  }
};
