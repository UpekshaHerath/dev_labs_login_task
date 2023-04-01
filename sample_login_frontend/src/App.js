import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Login />
      </div>
    </>
  );
}

export default App;
