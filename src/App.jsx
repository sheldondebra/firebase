import Message from "./components/message";
import SignIn from "./components/SignIn"


function App() {


  return (
    <div className="flex h-screen w-screen justify-center items-center place-items-center">
      <SignIn />
      <h1>Toast Notifications with tailwind-toastify</h1>
      <Message/>
    </div>
  );
}

export default App
