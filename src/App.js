// import React, { useState } from "react";

import React, { useCallback, useState } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
const App = () => {
  const [category, setCategory] = useState("all");

  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category} />
    </>
  );
};

// const App = () => {
//   // API를 넘겨받을 state 선언
//   const [data, setData] = useState(null);

//   const onClick = async () => {
//     // axios 라이브러리로 apic call
//     try {
//       const response = await axios.get(
//         "https://newsapi.org/v2/top-headlines?country=kr&apiKey=a552bd21cf964e1882427e73cdc95fd8"
//       );
//       // 응답 data state 저장
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={() => onClick()}>불러오기</button>
//       </div>
//       {/* JSON 문자열 뿌릴 영역 */}
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

export default App;
