import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Message from "./routes/Message";
import Banner from "./components/Banner";

function Router() {
  return (
    <BrowserRouter>
        <Banner/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/message" element={<Message/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;