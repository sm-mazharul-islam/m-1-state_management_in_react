import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="border border-purple-500 p-10 m-10">
      {/* <h1>Count = {count}</h1>
      <CounterWithFuncComponent count={count} setCount={setCount} /> */}
      <UserInfoWithUseReducer />
    </div>
  );
}

export default App;
