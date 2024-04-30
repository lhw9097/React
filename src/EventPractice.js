import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const onChangeUserName = (val) => setUserName(val);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="앞부분"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={message}
        placeholder="뒷부분"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyPress}
      />
      <h2>입력받은 메시지 : {message}</h2>
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventPractice;
