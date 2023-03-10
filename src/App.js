import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  // এখানে ইউজস্টেট করে ডাটা লোড করার জন্য নিচের লাইনটা লেখা হয়েছে 
  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState([]);

  // এখানে ইউজইফেক্ট ব্যবহার করে দেশগুলোকে কাউন্ট করতে পেরেছি এবং খুব সহজে এখানে ২৫০ টি দেশের নাম আছে ।
  useEffect(() => { 
      //  ফেস করার মাধ্যমে কাউন্টরিগুলোর নামের লিস্ট আনা হয়েছে 
       fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      // .then(data => {
      //   setCountries(data);
        // console.log(data);
        // আমরা একটা অ্যারে বানিয়েছি যেগুলো প্রত্যেকটা কান্ট্রি নিয়ে অ্যারে বানাবে । ম্যাপ শুধু অ্যারের উপরে কাজ করে । 
       
      //  const names = data.map(country => country.name)
      //  console.log(names);
      // })
      .catch(error => console.log(error))
      }, [])

  // // const [x, y] = ['abc', 'def']
  // const total = add(2, 3); //['abc', 'def']

   
    const handleAddCountry = (country) => {
      // console.log('country added', country)
      const newCart = [...cart, country];
      setCart(newCart);
    } 
  
  return (
    <div className="App">
      {/* এই লেখার মাধ্যমে ওয়েবের উপরে কাউন্ট্রি লোডেড লেখা দেখাবে এবং ২৫০ লেখা উঠবে  */}
      <h1>Country Loaded: {countries.length} </h1>  
      <h4>Country Added: {cart.length} </h4> 
      <Cart> cart={cart}</Cart>

      <ul>
         {/* এখানে দেশগুলোর নাম লিস্ট আকারে আনা হয়েছে । এখানে একটা লিস্ট আইটেম লেখা হয়েছে । খেয়াল রাখতে হবে লিস্ট্ আইটেমের কান্ট্রি নেমটা {} এর মধ্যে রাখতে হবে  */}

        {/* // এখানে কান্ট্রি হচ্ছে চাইল্ড কম্পনেন্ট । কারন এটা country.js এর কোড app.js এ অ্যাড করা হয়েছে । */}
        
         { 
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
         }
         
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
