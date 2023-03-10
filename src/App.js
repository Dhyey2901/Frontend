import logo from './logo.svg';
import './App.css';
import User_login from './pages/User_login.js';
import User_register from './pages/User_register.js';
import Main_dashboard from './pages/Main_dashboard.js';
import Otp_screen from './pages/Otp_screen.js';
import Chat_room from './pages/Chat_room.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_dashboard />}>
            <Route index element={<Main_dashboard />} />
            <Route path="signup" element={<User_register />} />

            {/* <User_register/> */}
            {/* <User_login/> */}
            {/* <Main_dashboard /> */}
            {/* <Otp_screen/> */}
            {/* <Chat_room/> */}

          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
