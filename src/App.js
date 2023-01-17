import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/users/Users';

import { users } from './users';
import User from './components/users/User';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:login" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
