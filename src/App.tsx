import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SignUpBanner from "./components/SignUpBanner";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <div className="bg-custom-body-background flex h-screen">
        <div>
          <NavBar />
          <Header />
          <div className="flex px-20 w-full">
            <TodoContainer />
            <div className="hidden lg:flex lg:ml-5">
              <SignUpBanner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
