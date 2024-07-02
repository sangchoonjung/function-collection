import React from "react";
import Header from "./ui/layout/Header";

const App = () => {
  const [state, setState] = React.useState(0);
  const handleButton = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <Header />
      Hello React!weweeeeeeeeeww
      <button onClick={handleButton}>{state}</button>
    </div>
  );
};

export default App;
