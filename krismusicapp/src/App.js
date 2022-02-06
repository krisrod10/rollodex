import { useState, useEffect } from 'react';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn])

  return (
    
    <div className="App">
      <header>Music App</header>
    {isLoggedIn === false ? (<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
    ) : (
      <Dashboard/>
    )}
    </div>
  );
}

export default App;
