// async: 반드시 return을 프로미스로 돌려줌
const hamburger = async () => {
  return "치즈버거";
};
hamburger().then((v) => console.log(v));

//await : promise가 [fullfilled, rejected]처리될때까지 함수의 실행을 정지함
const fetchData = async () => {
  const response = await fetch("www");
  const data = await response.json();
  return data;
};
