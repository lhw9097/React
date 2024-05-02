import "./App.css";
// JSX : JavaScript에 XML 추가 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함
// 컴포넌트가 반환될 때 태그는 한 개여야 함 => 하나의 태그로 묶어주기
// 자바스크립트 코드는 중괄호를 사용해 데이터 바인딩(결합)할 수 있음
// 조건부 렌더링 : {} 내에서 조건부 연산자 사용 가능 (name === "리액트" ? <h1>리액트</h1> : <h2>자바스크립트</h2>)
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 렌더링 (name === "리액트" && <h1>리액트입니다</h1>)
// 인라인 스타일링 : DOM
import Greeting from "./Greeting";
import Welcome from "./Welcome";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./EventPractice";
import Table from "./Table";
import UserList from "./UserList";
import TodoList from "./TodoList";
import CreateRef from "./Ref";
import HooksCnt from "./Hooks1";
import NameCard from "./NameCard";
import ExComponent from "./UserRef2";
// 컴포넌트의 합성
function App() {
  return (
    <>
      <ExComponent />
    </>
  );
}
export default App;
