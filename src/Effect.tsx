import { useEffect, useState } from "react";

const Effect = () => {
  //react 라이브러리: view만 다루는 것
  //다른 것들은 부수 효과(side effect)
  //side effect
  //1. 데이터 가져오기
  //2. 다른 API쓰기
  //3. DOM 직접 조작하기

  //함수, 배열[의존성 배열]: 앞의 함수가 재실행되도록 하는 요소들
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  //   const [trigger, setTrigger] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(() => true);
    const response = await fetch(
      "https://fakerapi.it/api/v1/addresses?_quantity=1"
    );
    const result = await response.json();
    setCity(result.data[0].city);
    setLoading(() => false);
  };

  const reload = () => {
    fetchData();
    // setTrigger((prev) => !prev);
  };

  const [city, setCity] = useState<string>("");

  //   useEffect(() => {
  //     const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
  //       .then((v) => v.json())
  //       .then((v) => v.data)
  //       .then((v) => console.log(v));
  //   }, [num]);

  useEffect(() => {
    // fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
    //   .then((v) => v.json())
    //   .then((v) => {
    //     setLoading((v) => false);
    //     setCity(v.data[0].city);
    fetchData();
    //   });
  }, []);

  return (
    <>
      <div>
        <div onClick={() => setNum((prev) => prev + 1)}>effect {num}</div>

        <div onClick={reload}>city : {loading ? "loading" : city}</div>
      </div>
    </>
  );
};
export default Effect;
