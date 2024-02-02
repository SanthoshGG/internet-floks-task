import "./App.css";
import About from "./components/about";
import Article from "./components/article";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Banner />
      </div>
      <div className="margingTopBottom">
        <About />
      </div>
      <div className="margingTopBottom">
        <Article />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
