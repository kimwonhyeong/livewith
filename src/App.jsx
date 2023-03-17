import Router from "./Router";
import { authProvider } from "./firebase";
import { useRecoilState } from 'recoil';
import { userToggle } from "./atom";

function App() {
  const [info, setInfo] = useRecoilState(userToggle);
  
  authProvider.onAuthStateChanged((user) => {
    if (user) {
      setInfo(prev => !prev); //참
      let uid = user.uid;
    } else {
      setInfo(prev => !prev); //거짓
    }
  });
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;