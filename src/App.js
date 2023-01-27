import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Articles from "./components/pages/articles";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import { useEffect, useState } from "react";
import UserForm from "./components/form/UserForm";
import UserData from "./components/form/UserData";
import Dashboard from "./components/dashboard/dashboard";
import UserDetail from "./components/form/UserDetail";

function App() {
  const HeaderLinks = ["Dashboard", "Home", "Articles", "About", "Contact"];
  const FooterLinks = ["About", "Social", "About us"];
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [updateValue1, setUpdateValue1] = useState(name);
  const userDetails = { name: "Deepak", age: 24, email: "abc@gmail.com" };

  const HanndleOnChange = (e) => {
    setName(e.target.value);
  };
  const UpdatedValue = () => {
    setUpdateValue1(name);
  };
  const onChangeUserDetails = (value, key) => {
    const updatedValue = { ...userDetails, [key]: value };

    setUser(updatedValue);
  };
  useEffect(() => {
    setUser(userDetails);
  }, []);

  return (
    <div className="relative">
      <Header links={HeaderLinks} openModel={() => setOpen(!open)} />
      {open && (
        <div className="absolute flex flex-col space-y-2 bg-white shadow-lg p-3 m-20 rounded-sm">
          <input
            placeholder="Enter Here"
            className="h-6 shadow-md rounded-lg text-black p-2"
            onChange={HanndleOnChange}
          />
          <p className="text-red-500 mx-7">{updateValue1}</p>
          <button className="bg-green-400 rounded-sm" onClick={UpdatedValue}>
            Sign-up
          </button>
        </div>
      )}
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
      <Footer links={FooterLinks} />
    </div>
  );
}

export default App;

//  <Header links={HeaderLinks} onSlect={() => {}} />;
//  {
//    /* <p>{user.name}</p>
//       <p> {user.age}</p> */
//  }
//  <Routes>
//    <Route path="/Home" element={<Home />} />
//    <Route path="/Articles" element={<Articles />} />
//    <Route path="/About" element={<About />} />
//    <Route path="/Contact" element={<Contact />} />
//  </Routes>;
//      <Footer links={FooterLinks} />;
