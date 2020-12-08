import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';
import Catvote from "./components/catvote/Catvote";
import Catcard from "./components/catcard/Catcard";
import Navigation from "./components/navigation/Nav";

const routes = [
  {path: '/', name: 'Catvote', Component: Catvote},
  {path: '/best-cat', name: 'Catcard', Component: Catcard}
]

function App() {
  return (
    <>
    <div className="App">
    <Router>
    <Navigation />
     {routes.map(({path, Component}) =>(
       <Route key={path} exact path={path}>
         <Component />
       </Route>
     ))}
     </Router>
    </div>
    </>
  );
}

export default App;
