// 4월 30일 화
import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // 정해진 간격에 맞춰 콜백 함수를 호출
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <h1>현재 시간을 표시합니다</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};
export default Clock;
