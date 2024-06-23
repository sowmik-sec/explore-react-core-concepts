/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Student />
      <Developer />
      <Device name="Laptop" price="69000" />
      <Device name="Watch" price="1200" />
    </>
  );
}

function Person() {
  const age = 26;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

function Device({ name, price }) {
  return (
    <h2>
      This device: {name}, Price: {price}
    </h2>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
