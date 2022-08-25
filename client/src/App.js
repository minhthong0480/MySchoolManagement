//import pages
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './auth/Login'
import Register from './auth/Register'

//import dependencies
import  { React, Fragment } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
          <Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoute />}>
            {/* <Route/> */}
          </Route>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App