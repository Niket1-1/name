import { useState } from "react";
import "./App.css";
import Counter from "./Component/Counter";

// import Todos from "./Component/Todos";

const App = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="App">
        {show ? (
          <>
            <Counter />
            <button
              onClick={() => {
                setshow(false);
              }}
            >
              Hide counter
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setshow(true);
            }}
          >
            show counter
          </button>
        )}
      </div>
      {/* <Todos /> */}
    </>
  );
};

export default App;
