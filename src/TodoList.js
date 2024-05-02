// 5월 2일 목
import { useEffect, useState } from "react";
import "./App.css";

const TodoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "자바스크립트 이해" },
          { id: 4, text: "리액트 프로젝트" },
        ];
  });
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  // 내용 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해줌
    setNames(nextNames);
    setInputText(""); // inputText를 비움
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}></li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default TodoList;
