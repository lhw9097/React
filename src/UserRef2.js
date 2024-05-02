// 5월 2일 목
import { useEffect, useRef } from "react";
// useRef : 컴포넌트 내부 변수값 유지
const ExComponent = () => {
  const myBtnRef = useRef(null);
  console.log("화면이 렌더링되는지 확인!");
  useEffect(() => {
    if (myBtnRef.current) {
      myBtnRef.current.innerText = "클릭하세요";
    }
  }, []);
  // 컴포넌트 내부 변수를 useRef를 사용하여 값 유지
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };
  return (
    <div>
      <button ref={myBtnRef} onClick={handleClick}>
        초기 상태
      </button>
    </div>
  );
};
export default ExComponent;
