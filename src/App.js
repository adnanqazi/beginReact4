import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Menu from './app1/script'
//import Menu from './app2/script'
import Tooltip from './app3/tool_tip'


function App() {
  return (
    <div>
    <h1>Tooltip   <Tooltip text="Widgets can screw with anything">Widget</Tooltip></h1>
      <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development">Pro Express.js</Tooltip>
       was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
        after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>.
        ...
        The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>,
         <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>.
         There are many other frameworks to consider, but I had to draw the line somewhere.
      </div>
  );
}
// function App2() {
//   return (
//   <Menu />
//   );
// }

// function App1() {
//   return (
//   <Menu />
//   );
// }


export default App;
