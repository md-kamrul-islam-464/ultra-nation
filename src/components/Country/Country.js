import React from 'react';

// একটা ডাটাকে এককোড থেকে অন্য কোডে পাস করাকে props বলা হয় । props এর মাধ্যমে country.js থেকে ডাটা App.js এ সহজেই পাস করে নিতে পেরেছি 
const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag} = props.country;
    // console.log(props.country);
    const flagStyle = {height: '50px'}
    // এখানে দেশগুলোকে স্টাইল দেয়া হয়েছে 
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px', borderRadius: '10px'}
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle} >
             {/* এই লাইনগুলো কমিয়ে সর্টকার্টে নিচে করা হলো 
             <h4> This is a {props.country.name} </h4>  
            <p> Population: {props.country.population}</p>
            <p><small> Region: {props.country.region}</small></p> */}

            <h4> This is a {name} </h4>  
            <img style={flagStyle} src={flag} alt="" />
            <p> Population: {population}</p>
            <p><small> Region: {region}</small></p>  
            {/* মনে রাখতে হবে, কোনো একটি ইভেনহ্যান্ডলারের মধ্যে যদি আমরা প্যারামিটার পাঠাতে চাই তাহলে এইটাকে আলাদা একটা অ্যারো ফাংশন বানাতে হবে  */}
            <button onClick={() => handleAddCountry(props.country)}> Add Country </button>
        </div>
    );
};

export default Country;


