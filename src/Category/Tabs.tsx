import { useState } from "react";
import CategoryButton from "./CategoryButton";

// 탭 내비게이션 컴포넌트
const Tabs = () => {
  // 탭 목록과 선택 상태를 관리하는 상태
  const [tabList, setTabList] = useState([
    {
      name: "moovie",
      isSelected: true,
      categories: [
        { image: "netflix.png", title: "netflix" },
        { image: "watcha.png", title: "watcha" },
      ],
    },
    {
      name: "animation1",
      isSelected: false,
      categories: [
        { image: "disney.jpg", title: "disney" },
        { image: "ghibli.webp", title: "ghibli" },
      ],
    },
    {
      name: "animation2",
      isSelected: false,
      categories: [
        { image: "AOT.webp", title: "Attack on titan" },
        { image: "FMA_original.webp", title: "FMA original" },
      ],
    },
    // {
    //   name: "tab4",
    //   isSelected: false,
    //   images: ["netflix.png", "watcha.png", "disney.jpg"],
    //   titles: ["Netflix", "Watcha", "Disney"],
    // },
    // {
    //   name: "tab5",
    //   isSelected: false,
    //   images: ["watcha.png", "watcha.png", "disney.jpg"],
    //   titles: ["Watcha", "Netflix", "Disney"],
    // },
  ]);

  // 선택된 탭과 선택되지 않은 탭의 CSS 클래스
  const selected = "px-8 py-6 text-center border-b-4 border-black";
  const notSelected = "px-8 py-6 text-center";

  // 탭 클릭 이벤트를 처리하는 함수
  const click = (i: number) => {
    setTabList((prev) => {
      const newTabList = prev.map((v, index) =>
        i === index ? { ...v, isSelected: true } : { ...v, isSelected: false }
      );
      return newTabList;
    });
  };

  return (
    <>
      {/* 탭 내비게이션 바 */}
      <nav className="flex justify-center">
        {tabList.map((v, i) => {
          return (
            <div
              onClick={() => click(i)}
              className={v.isSelected ? selected : notSelected}
            >
              <button className="text-black">{v.name}</button>
            </div>
          );
        })}
      </nav>
      {/* 선택된 탭의 카테고리 표시 */}
      {tabList.map((v) => {
        return (
          v.isSelected && v.categories.map((v1) => <CategoryButton {...v1} />)
        );
      })}
    </>
  );
};

export default Tabs;

//   return (
//     <div className="flex justify-center">
//       {/* <div
//         onClick={clickFirst}
//         className={isActive === "Tab1" ? selected : notSelected}
//       >
//         <button className="text-black">Tab 1</button>
//       </div>
//       <div
//         onClick={clickSecond}
//         className={isActive === "Tab2" ? selected : notSelected}
//       >
//         <button className="text-black">Tab 2</button>
//       </div>
//       <div
//         onClick={clickThird}
//         className={isActive === "Tab3" ? selected : notSelected}
//       >
//         <button className="text-black">Tab 3</button>
//       </div> */}
//       {tabList.map((v, i) => {
//         return (
//           <>
//             <div
//               onClick={() => click(i)}
//               className={v.isSelected ? selected : notSelected}
//             >
//               <button className="text-black">{v.name}</button>
//               {/* <CategoryButton image={`${v.images[0]}`} title={v.titles[0]} />
//             <CategoryButton image={`${v.images[1]}`} title={v.titles[1]} />
//             <CategoryButton image={`${v.images[2]}`} title={v.titles[2]} />
//             <CategoryButton image={`${v.images[3]}`} title={v.titles[3]} />
//             <CategoryButton image={`${v.images[4]}`} title={v.titles[4]} /> */}
//             </div>
//             {tabList.map((v) => {
//               return (
//                 v.isSelected &&
//                 v.categories.map((v1) => <CategoryButton {...v1} />)
//               );
//             })}
//           </>
//         );
//       })}
//     </div>
//   );
// };
// export default Tabs;
