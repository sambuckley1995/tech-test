import React from "react";
import ReactDOM from "react-dom";
import UserSearch from "../Containers/UserSearch/UserSearch";

const App = () => {
  return (
    <>
      <UserSearch />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
