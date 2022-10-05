import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
body {
  background-color:#99d8ff;
  background:
  radial-gradient(at 12% 11%, hsla(204,77%,68%,1) 0px, transparent 50%),
  radial-gradient(at 95% 23%, hsla(11,70%,64%,1) 0px, transparent 50%),
  radial-gradient(at 45% 70%, hsla(0,84%,67%,1) 0px, transparent 50%),
  radial-gradient(at 9% 82%, hsla(248,91%,62%,1) 0px, transparent 50%),
  radial-gradient(at 80% 45%, hsla(128,65%,74%,1) 0px, transparent 50%),
  radial-gradient(at 33% 99%, hsla(97,71%,66%,1) 0px, transparent 50%),
  radial-gradient(at 20% 32%, hsla(59,98%,73%,1) 0px, transparent 50%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  margin: 0;
  padding: 2rem;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodoTemplate />
    </>
  );
}

export default App;
