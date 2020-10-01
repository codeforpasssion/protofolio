import React,{useState,useEffect} from 'react';
import './App.css';
import Pages from './pages';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(":sdfs");
      fetch('https://gitconnected.com/v1/portfolio/codeforpasssion').then(res =>res.json()).then((usr)=>{
          setUser(usr)
      })
  }, [])
  return (
    <div className="App">
      {user && <Pages user={user}/>}
    </div>
  );
}

export default App;
