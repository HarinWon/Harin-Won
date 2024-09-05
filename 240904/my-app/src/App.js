import "./App.css";
import Header from "./components/Header";
import Body5 from "./components/Body5";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header /> {/* Header 컴포넌트 렌더링 */}
      <Body5 /> {/* Body1 컴포넌트 렌더링 */}
      <Footer /> {/* Footer 컴포넌트 렌더링 */}
    </div>
  );
}

export default App;
