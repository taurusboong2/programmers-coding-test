// https://school.programmers.co.kr/learn/courses/30/lessons/120913]

// 문자열 `my_str`과 `n`이 매개변수로 주어질 때, `my_str`을 길이 `n`씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (my_str, n) => {
  const sliceString = (str, n) =>
    str.length > 0 ? [str.slice(0, n), ...sliceString(str.slice(n), n)] : [];

  return sliceString(my_str, n);
};
