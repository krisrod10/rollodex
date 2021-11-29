import { useState, useEffect } from 'react';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import './App.css';



function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn])


  return (
    <div className="App">
      {isLoggedIn === false ? (<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard />
      )}
      

    </div>
  );
}

export default App;
