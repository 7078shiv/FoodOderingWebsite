import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from './Components/AppState';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Hotels from './Components/Hotels';
import MaterialUIExample from './Components/MaterialUIExample';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import "./FirebaseSetUp"
import UserContextProvider, { UserContext } from './Components/UserContextProvider';
import Profile from './Components/Profile';
function App() {
  const user=useContext(UserContext);
  return (
    
    <UserContextProvider>
    <Provider store={configureStore()}>
      <BrowserRouter>
      <Routes>
        {/* Project */}
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/hotel' element={<Hotels></Hotels>}></Route>
        <Route path="/MaterialUIExample" element={<MaterialUIExample/>}></Route>
        {!user && <Route path="/login" element={<Login/>}></Route>}
       {!user && <Route path="/signup" element={<SignUp/>}></Route>}
        {/* in case user doesnot give subpath */}
        <Route path="/" element={<Hotels></Hotels>}></Route>
        { <Route path="/profile" element={<Profile/>}></Route>}
      </Routes>
      </BrowserRouter>
    </Provider>
    </UserContextProvider>
  );
}

export default App;