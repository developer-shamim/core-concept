import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: "Md. Abdus Samad",
    job: "Income Tax Practitioner"
  }
  var style={
    color:'red',
    backgroundColor: 'white'
  }

  const products = [
    {name: 'Photoshop',price: '$99.99'},
    {name: 'Illustrator', price: "$60.99"},
    {name: 'Adobe Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>

         <h1 className="" style={style}>{person.name}</h1>
        <Person heading="Boy-hood"> </Person>
        <Person heading="Men-hood"> </Person>
        <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product>
        <Product product={products[2]}> </Product>
        <Users> </Users>



      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div> 
      <h1>Count Order: {count} </h1>
      <button onClick= {() => setCount(count - 1)}  > Cancel Order</button>
      <button onClick = {() => setCount(count + 1)} > Place Order</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin: '10px'
  }
  return (
    
    <div style={personStyle}>
      <h1>{props.heading}</h1>
      <h3>in the early age of my life I was a very wicked person but always tends to learn new things in different way rather focusing in the books</h3>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid blue',
    borderRadious: '5px',
    backgroundColor: 'lightgrey',
    height: '300px',
    weidth: '200px',
    float: 'left'
  }
  return (
  <div className="" style={productStyle}>
    <h2> {props.product.name} </h2>
    <h1> {props.product.price}</h1>
    <button> Buy Now </button>
  </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3> Latest Subscribers: {users.length} </h3>
      <ul>
        {users.map(users => <li>{users.name}</li>)}
      </ul>
    </div>
  )
}
export default App;
