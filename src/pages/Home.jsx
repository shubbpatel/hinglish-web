import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div>
      <nav className="navbar"> <h1 className="logotxt" >Hinglish Web</h1></nav>
      <div className="dj">
        <h1>React</h1>
        <h2>Getting Started</h2>
        <p>
          React ek JavaScript library hai jise user interfaces banane ke liye
          design kiya gaya hai.
        </p>
        <p>React ka istemal single-page applications banane mein hota hai.</p>
        <p>React ka istemal single-page applications banane mein hota hai.</p>
        <p>React hamen reusable UI components banane me madad karta hai.</p>

        <h2>Learn by Examples</h2>

        <p className="bgExample">
            <pre>

          {` import React from 'react'; import ReactDOM from 'react-dom/client';
          function Hello(props){" "}
          {
              return <h1>Hello World!</h1>;
            }
            const container = document.getElementById("root"); const root =
            ReactDOM.createRoot(container);
        root.render(<Hello />); `}
        </pre>
        </p>

        <h2>Create React App</h2>
        <p>
          React sikhne aur test karne ke liye, aapko apne computer par ek React
          Environment set up karna chahiye. Is tutorial mein, create-react-app
          ka istemal kiya gaya hai. create-react-app ek official tareeka hai
          React applications banane ka. create-react-app ka istemal karne ke
          liye Node.js ki zarurat hoti hai. Apne terminal ko us directory mein
          kholiye jahan aap apni application banane chahte hain. Is command ko
          chalaiye to ek React application my-react-app naam se ban jayegi:
        </p>
        <p className="bgBlue">npx create-react-app my-react-app</p>

        <p>
          create-react-app sab kuch set up karega jo aapko ek React application
          chalane ke liye zaruri hogi."
        </p>
        <br />
        <h2>Run the React Application</h2>
        <p>my-react-app directory mein jaane ke liye is command ko chalaiye:</p>
        <p className="bgBlue">cd my-react-app</p>
        <p>
          React application my-react-app ko chalane ke liye is command ko
          execute karein:
        </p>
        <p className="bgBlue">npm start</p>
        <p>
          Ek naya browser window khulegi jisme aapke naye banaye gaye React App
          honge! Agar nahi khulta, to apne browser ko kholiye aur address bar
          mein localhost:3000 likhiye.
        </p>
        <img src="" alt="" />
        <br />
        <h2>Aapko Pehle Se Kya Pata Hona Chahiye ?</h2>
        <p>
          React.JS shuru karne se pehle, aapko inn topics ko pehle padhna
          chahiye:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          Aapko ECMAScript 6 (ES6) mein aaye naye JavaScript features ke saath
          kuch anubhav bhi hona chahiye; aap inke baare mein React ES6 chapter
          mein seekhenge.
        </p>
        <br />
        <h2>What is React</h2>
        <p>
          React, ko ek frontend JavaScript framework bhi kaha jata hai, Facebook
          dwara banayi gayi ek JavaScript library hai. React UI components
          banane ka ek tool hai.
        </p>
        <br />
        <h2>React Kaise kaam Karta hai ?</h2>
        <p className="bgYellow">React memory mein ek VIRTUAL DOM banata hai</p>
        <p>
          Brower ke DOM me sidha badlaav karne ki jagah, React memory mein ek
          virtual DOM banata hai, jahan par sab jaruri badlaav hota hai, uske
          baad jo jaruri changes hain browser ke DOM mein kiya jata hai.
        </p>
        <p className="bgYellow">
          React keval tabhi changes karta hai jab avashyak ho!
        </p>
        <p>
          React ye jaan leta hai ki kaun-kya change hua hai, aur sirf wahi
          change karta hai jo jaruri hai. Aap is tutorial ke baki hisse mein ye
          samajhenge ki React ye kaise karta hai
        </p>
        <br />
        <h2>What is ES 6 ? (ES 6 kya hai ?)</h2>
        <p>
          ES6 ka matlab hai ECMAScript 6. ECMAScript ko JavaScript ko
          standardize karne ke liye banaya gaya tha, aur ES6 ECMAScript ka 6th
          version hai, jo 2015 mein launch hua tha, aur ise ECMAScript 2015 bhi
          kaha jata hai.
        </p>
        <h2>Why Should I Learn ES6? (Mujhe ES 6 kyu seekhna chahiye ?)</h2>
        <p>
          React ES6 ka istemal karta hai, aur aapko kuch naye features ke saath
          familiar hona chahiye, jaise ki:
          <ul>
            <li>Classes</li>
            <li>Arrow Functions</li>
            <li>Variables (let, const, var)</li>
            <li>Array Methods like .map()</li>
            <li>Destructuring</li>
            <li>Modules</li>
            <li>Ternary Operator</li>
            <li>Spread Operator</li>
          </ul>
        </p>
        <br />
        <h2>React ES 6 Classes</h2>
        <h3>Classes</h3>
        <p>
          Ek class ek prakar ka function hota hai, lekin isse shuru karne ke
          liye hum 'function' shabd ka istemal nahi karte, hum 'class' shabd ka
          istemal karte hain, aur properties ek 'constructor()' method ke andar
          assign kiye jaate hain
        </p>
        <h3>Example</h3>
        <p>A simple class constructor:</p>
        <p className="bgExample">
            <pre>

          {`class Bike {
              constructor(name) {
                  this.brand = name;
                }
            } `}
            </pre>
        </p>
        <p className="bgYellow">
          Class ke naam ka dhyan dijiye. Humne naam "bike" ko ek uppercase
          character ke saath shuru kiya hai. Ye ek class ke liye ek standard
          naming convention hai.
        </p>
        <p>Ab aap Car class ka istemal karke objects bana sakte hain</p>
        <br />
        <h3>Example</h3>
        <p className="bgExample">
            <pre>

          { `class Bike {
              constructor(name) {
                  this.brand = name;
                }
            }
            
        const mybike = new bike("BMW");`}
        </pre>
        </p>
        <br />
        <p className="bgYellow">
          Note: Constructor function autometically call ho jaati hai jab object
          initialize hota hai{" "}
        </p>

        <br />
        <h2>Method in Classes</h2>
        <p>Aap ek class mein apne methods add kar sakte hain.</p>
        <h4>Example</h4>
        <p>Ek method banaiye jiska naam "present" ho:</p>
        <p className="bgExample">
            <pre>

          {`class Car {
              constructor(name) {
                  this.brand = name;
                }
                
                present() {
    return 'I have a ' + this.brand;
}
}

const mycar = new Car("Ford");
mycar.present(); `}
</pre>
        </p>
        <p>
          Jaise ki aap upar ke udaharan mein dekh sakte hain, aap method ko
          object ke method ka naam refer karte hue bulate hain, jise parentheses
          ke saath follow kiya jata hai (parameters parentheses ke andar jaate
          hain).
        </p>
        <h3>Class Inheritance</h3>
        <p>
          Class inheritance banane ke liye, 'extends' shabd ka istemal karein.
        </p>
        <p>
          Ek class jise class inheritance ke saath banaya gaya hai, wo dusri
          class ke sabhi methods ko inherit karti hai:
        </p>
        <h3>Example</h3>
        <p>
          Ek class banaiye jiska naam "Model" hai, jo "Car" class ke sabhi
          methods ko inherit karegi:
        </p>
        <p className="bgExample">
            <pre>

          {`class Car {
              constructor(name) {
                  this.brand = name;
                }
                
  present() {
      return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
const mycar = new Model("Ford", "Mustang");
mycar.show(); `}
</pre>
        </p>
        <p>super() method parent class ko refer karta hai.</p>
        <p>
          "Constructor method mein super() method ko bulakar, hum parent class
          ke constructor method ko call karte hain aur parent class ke
          properties aur methods ka upayog karte hain.
        </p>

        <br />
        <br />
        <h2>ES6 Arrow Functions</h2>
        <p>
          in simple words: Arrow functions humein chhoti syntax mein function
          likhne me madad karte hain
        </p>

        <h3>Example </h3>
        <p>before: </p>
        <p className="bgExample">
          {`hello = function() {
  return "Hello World!";
} `}
        </p>
        <br />
        <h3>Example</h3>
        <p>with Arrow Function :</p>
        <p className="bgExample">
          {` hello = () => {
  return "Hello World!";
} `}
        </p>
        <p>
          <br />
          Yeh aur bhi chhota ho jaata hai! Agar function mein sirf ek statement
          hai, aur woh statement ek value return karta hai, to aap brackets aur
          return keyword ko hata sakte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Functions ka Return Value by Default:</p>
        <p className="bgExample">{`hello = () => "Hello World!"; `}</p>
        <p className="bgYellow">
          Note: Ye kaam tabhi karta hai agar function mein sirf ek statement hai
        </p>
        <p>
          Agar aapke pas parameters hain, to aap unhe parentheses ke andar pass
          karte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Function With Parameters:</p>
        <p className="bgExample">{` hello = (val) => "Hello " + val; `}</p>
        <p>
          Yadi aapke paas sirf ek parameter hai, to aap parentheses ko bhi chhod
          sakte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Function Without Parentheses:</p>
        <p className="bgExample">{`hello = val => "Hello " + val; `}</p>
        <br />
        <h2>
          What About <span style={{ color: "red" }}>this</span>?
        </h2>
        <p>
          'this' ka handling regular functions ke comparison mein arrow
          functions mein alag hai.
        </p>
        <p>
          Saral shabdon mein, arrow functions mein 'this' ka binding nahi hota.
        </p>
        <p>
          Sadharan functions mein 'this' keyword uss object ko represent karta
          hai jisne function call kiya, jo ki window, document, ek button ya
          kuch bhi ho sakta hai.
        </p>
        <p>
          Arrow functions mein, 'this' keyword hamesha woh object ko represent
          karta hai jo arrow function ko define karta hai.
        </p>
        <p>Is difference ko samajhne ke liye, do examples dekhte hain.</p>
        <p>
          Dono examples ek method ko do baar call karte hain, pehli baar jab
          page load hota hai, aur doosri baar jab user ek button par click karta
          hai
        </p>
        <p>
          Pehla example regular function ka istemal karta hai, aur doosra
          example ek arrow function ka istemal karta hai.
        </p>
        <p>
          result dikhata hai ki pehla example do alag-alag objects (window aur
          button) ko return karta hai, aur doosra example Header object ko do
          baar return karta hai
        </p>
        <h3>Example</h3>
        <p>
          regular function mein, 'this' uss object ko represent karta hai jo
          function call karta hai:
        </p>
        <p className="bgExample">
            <pre>

          {`class Header {
              constructor() {
                  this.color = "Red";
                }
                
                //Regular function:
                changeColor = function() {
                    document.getElementById("demo").innerHTML += this;
                }
            }
            
            const myheader = new Header();
            
            //The window object calls the function:
            window.addEventListener("load", myheader.changeColor);
            
            //A button object calls the function:
            document.getElementById("btn").addEventListener("click", myheader.changeColor);  `}
            </pre>
        </p>
        <h3>Example</h3>
        <p>
          Arrow function mein, 'this' Header object ko represent karta hai,
          chahe jo bhi function ko call kare:
        </p>
        <p className="bgExample">
            <pre>

          {`class Header {
              constructor() {
                  this.color = "Red";
                }
                
                //Arrow function:
                changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor); `}
</pre>
        </p>
        <p>
          Jab aap functions ke saath kaam kar rahe hain, toh in differences ko
          yaad rakhein. Kabhi-kabhi regular functions ka behavior aapko chahiye
          hota hai, agar nahi, to arrow functions ka istemal karein."
        </p>
        <br />
        <h2>ES6 Variables</h2>
        <p>
          ES6 se pehle aapke variables ko define karne ka ek hi tareeka tha:
          'var' keyword ka istemal. Agar aap unhe define nahi karte the, toh woh
          global object ko assign ho jaate the. Lekin agar aap strict mode mein
          nahi the, toh aapko error milta tha agar aapke variables undefined the
        </p>
        <p>
          Ab, ES6 ke saath, aapke pas variables ko define karne ke liye teen
          tareeke hain: <span style={{ color: "green" }}>var</span> ,{" "}
          <span style={{ color: "purple" }}>let</span>, aur{" "}
          <span style={{ style: "pink" }}>const</span>.
        </p>

        <h3>Example</h3>
        <p>var</p>
        <p className="bgExample">var x = 5.6;</p>
        <p>
          Agar aap kisi function ke bahar{" "}
          <span style={{ color: "green" }}>var</span> ka istemal karte hain, toh
          woh global scope mein hota hai."
        </p>
        <p>
          Agar aap kisi function ke andar{" "}
          <span style={{ color: "green" }}>var</span> ka istemal karte hain, toh
          woh uss function ka hissa ban jata hai (it belongs to that function).
        </p>
        <p>
          Agar aap <span style={{ color: "green" }}>var</span> ka istemal kisi
          block ke andar karte hain, jaise ki ek for loop mein, toh woh variable
          uss block ke bahar bhi available rahega.
        </p>
        <p className="bgYellow">
          <span style={{ color: "green" }}>var</span> ka ek function scope hota
          hai, block scope nahi.
        </p>
        <h3>Example</h3>
        <p>let</p>
        <p className="bgExample">let x = 45.44;</p>
        <p>
          <span style={{ color: "purple" }}>let</span>{" "}
          <span style={{ color: "green" }}>var</span> ka block scoped version
          hai, aur yeh uss block (ya expression) tak hi limited hota hai jahan
          par yeh define kiya jata hai."
        </p>
        <p>
          Agar aap <span style={{ color: "purple" }}>let</span> ka istemal kisi
          block ke andar karte hain, jaise ki ek for loop mein, toh woh variable
          sirf uss loop ke andar hi available rahega
        </p>
        <p>
          <span style={{ color: "purple" }}>let</span> ka block scope hota hai.
        </p>
        <h3>Example</h3>
        <p>const</p>
        <p className="bgExample">const x = 52.6;</p>
        <p>
          <span style={{ style: "pink" }}>const</span> ek aisa variable hai jo
          ek baar create ho gya, to uski value kabhi nahi badal sakti.
        </p>
        <p>
          <span style={{ style: "pink" }}>const</span> has a block scope.
        </p>
        <p>
          Keyword <span style={{ style: "pink" }}>const</span> thoda misleading
          ho sakta hai.
        </p>
        <p>
          Ye ek constant value ko define nahi karta. Ye ek value ke liye
          constant reference ko define karta hai
        </p>
        <p>
          Is wajah se aap Nahi kar sakte hain :
          <ul>
            <li>ek constant value reassign nahi kar sakte</li>
            <li>ek constant array reassign nahi kar sakte</li>
            <li>ek constant object reassign nahi kar sakte</li>
          </ul>
          <p>Par aap kar sakte hain:</p>
          <ul>
            <li>constant array ke elements change kar sakte hain</li>
            <li>constant object ke properties change kar sakte hain</li>
          </ul>
        </p>
        <br />
        <h2>ES6 'Array Methods'</h2>
        <p>Bahut se JavaScript array methods hain.</p>
        <p>
          React mein ek bahut hi useful array method hai, jo hai .map() method
        </p>
        <p>
          .map() method aapko array ke har item par ek function chalane me help
          karta hai, jisse ek naya array result ke roop mein milta hai
        </p>
        <p>
          React mein, map() ka istemal lists banane ke liye kiya ja sakta hai.
        </p>
        <h3>Example</h3>
        <p>Ek array se items ki ek list banaiye:</p>
        <p className="bgExample">
            <pre>
{`

          const myArray = ['apple', 'banana', 'orange'];
          const myList = myArray.map((item) => <p>{item}</p>)
`}
            </pre>
        </p>

        <br />
        <h2>ES6 Destructuring</h2>
        <p>
          Destructuring ko samjhaane ke liye, hum ek sandwich banayenge. Kya aap
          fridge se sab kuch nikal kar apna sandwich banate hain? Nahi, aap sirf
          woh cheezein nikalte hain jo aap apne sandwich mein istemal karna
          chahte hain.
        </p>

        <p>
          Destructuring bilkul waise hi hai. Hamare paas ek array ya object ho
          sakta hai jise hum istemal kar rahe hain, lekin hame inme se kuch hi
          items ki zarurat hoti hai.
        </p>
        <p>
          Destructuring se sirf wohi cheezein nikalna asaan ho jata hai jo
          zaruri hai.
        </p>
        <br />
        <h3>Destructing Arrays</h3>
        <p>
          Ye hai ek purane tareeke se array ke items ko ek variable mein assign
          karne ka tareeka:
        </p>
        <h3>Example</h3>
        <p>before:</p>
        <p className="bgExample">
            <pre>
{`
          const vehicles = ['mustang', 'f-150', 'expedition']; <br />
          // old way const
          <br />
          car = vehicles[0]; <br />
          const truck = vehicles[1];
          <br />
          const suv = vehicles[2];
`}
            </pre>
        </p>
        <br />
        <p>
          Ye hai ek naye tareeke se array ke items ko ek variable mein assign
          karne ka tareeka
        </p>
        <h3>Example</h3>
        <p>With destructuring:</p>
        <p className="bgExample">
          const vehicles = ['mustang', 'f-150', 'expedition']; <br />
          const [car, truck, suv] = vehicles;
        </p>
        <p className="bgYellow">
          Arrays ki destructuring karte samay, variables ko declare karne ka
          order important hai.
        </p>
        <p>
          Agar hamein sirf car aur suv chahiye, toh hum truck ko bas bahar chhod
          sakte hain lekin comma rakh sakte hain:
        </p>
        <p className="bgExample">
          const vehicles = ['mustang', 'f-150', 'expedition'];
          <br />
          const [car,, suv] = vehicles;
        </p>
        <p>
          Destructuring ka istemal tab aur useful ho jata hai jab koi function
          ek array return karta hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`

  function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7); 
`}
          </pre>
        </p>

        <br />
        <h2>Destructuring Objects</h2>
        <p>
          Ye hai ek object ko ek function ke andar istemal karne ka purana
          tareeka:
        </p>
        <h3>Exapmle</h3>
        <p className="bgExample">
          <pre>
            {`
                const vehicleOne = {
                    brand: 'Ford',
                    model: 'Mustang',
                    type: 'car',
                    year: 2021, 
                    color: 'red'
                  }
                  
                  myVehicle(vehicleOne);
                  
                  // old way
                  function myVehicle(vehicle) {
                    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
                  }
                `}
          </pre>
        </p>
        <p>
          Ye hai ek object ko ek function ke andar istemal karne ka naya
          tareeka:
        </p>
        <h3>Example</h3>
        <p>with destructuring:</p>
        <p className="bgExample">
          <pre>
            {`
                const vehicleOne = {
                    brand: 'Ford',
                    model: 'Mustang',
                    type: 'car',
                    year: 2021, 
                    color: 'red'
                  }
                  
                  myVehicle(vehicleOne);
                  
                  function myVehicle({type, color, brand, model}) {
                    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
                  }`}
          </pre>
        </p>
        <p>
          Dhyaan dijiye ki object properties ko kisi specific order mein declare
          karne ki jarurat nahi hoti.
        </p>
        <p>
          Hum deeply nested objects ki bhi destructuring kar sakte hain jise
          nested object ko refer karke fir ek colon aur curly braces ka istemal
          karke waha se zaruri items ki phir se destructuring kar sakte hain:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
        const vehicleOne = {
            brand: 'Ford',
            model: 'Mustang',
            type: 'car',
            year: 2021, 
            color: 'red',
            registration: {
              city: 'Houston',
              state: 'Texas',
              country: 'USA'
            }
          }
          
          myVehicle(vehicleOne)
          
          function myVehicle({ model, registration: { state } }) {
            const message = 'My ' + model + ' is registered in ' + state + '.';
          }

       `}
          </pre>
        </p>
        <br />
        <h2>ES6 Spread Operator</h2>
        <p>
          Spread Operator : JavaScript spread operator (...) humein ek existing
          array ya object ka poora ya kuch hissa quickly doosre array ya object
          mein copy karne help karta hai.
        </p>
        <h3>Example</h3>
        <p>
          <pre>
            {`
        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined = [...numbersOne, ...numbersTwo];
        `}
          </pre>
        </p>
        <p>
          Spread operator aksar destructuring ke saath milakar istemal hota hai
        </p>
        <h3>Example</h3>
        <p>
          Pahle aur doosre item ko <span className="clrRed">numbers</span> se
          variables mein assign karein aur baki ko ek array mein rakh dein:
        </p>
        <p className="bgExample">
          <pre>
            {`
        const numbers = [1, 2, 3, 4, 5, 6];

        const [one, two, ...rest] = numbers;
        `}
          </pre>
        </p>
        <p>
          Hum objects ke saath bhi spread operator ka istemal kar sakte hain:
        </p>
        <h3>Example</h3>
        <p>Combine these two objects:</p>
        <p className="bgExample">
          <pre>
            {`
       const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
      }
      
      const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
      }
      
      const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
       `}
          </pre>
        </p>
        <p className="bgYellow">
          Dhyaan dijiye ki jo properties match nahi hui, woh combine ho gayi,
          lekin jo property match hui, jaise ki color, woh last object
          updateMyVehicle ke dvara di gayi value se overwrite ho gayi. Resultant
          color ab yellow hai.
        </p>
        <br />
        <h2>ES6 Modules</h2>
        <p>Modules:</p>
        <p>
          JavaScript modules aapko apne code ko alag-alag files mein baantne ko
          allow karta hain.
        </p>
        <p>Isse code-base ko maintain karna aasan ho jata hai.</p>
        <p>ES Modules import aur export statements par rely karte hain</p>
        <h3>Export</h3>
        <p>
          Aap kisi bhi file se ek function ya variable ko export kar sakte hain
        </p>
        <p>
          Chaliye ek file banate hain jiska naam{" "}
          <span className="clrRed">user.js</span> hai, aur usme woh cheezein
          fill karte hain jo hum export karna chahte hain
        </p>
        <p>2 prakar ke exports hote hain: Named aur Default.</p>
        <h3>Named Exports</h3>
        <p>
          Aap named exports do tareeke se bana sakte hain. Ek ek karke ya phir
          sabhi ek saath file ke bottom mein.
        </p>
        <h3>Example</h3>
        <p>In-line ek ek karke:</p>
        <p>
          <span className="clrRed">user.js</span>
        </p>

        <p className="bgExample">
          <pre>
            {`
    export const name = "Jesse"
    export const age = 40
    `}
          </pre>
        </p>
        <h3>All at once at the bottom (sabhi ek saath file ke bottom mein)</h3>
        <p className="bgExample">
          <pre>
            {`
         const name = "Jesse"
         const age = 40
         
         export { name, age }
         `}
          </pre>
        </p>
        <h3>Default Exports</h3>
        <p>
          Chaliye ek aur file banate hain, jiska naam{" "}
          <span className="clrRed">text.js</span> hai, aur ise default export ko
          dikhane ke liye istemal karte hain.
        </p>
        <p>Aap ek file mein keval ek default export rakh sakte hain.</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">text.js</span>
        </p>
        <p>
          <pre>
            {`
         const text = () => {
            const name = "Jesse";
            const age = 40;
            return name + ' is ' + age + 'years old.';
          };
          
          export default text;
         `}
          </pre>
        </p>
        <h3>import</h3>
        <p>
          Aap modules ko ek file mein do tareeke se import kar sakte hain, based
          on ki woh named exports hain ya default exports.
        </p>
        <p>
          Named exports ko curly braces ka istemal karke destructuring karna
          padta hai. Default exports ko nahi karna padta.
        </p>

        <h3>Example</h3>
        <p>File user.js se named exports ko import karein:</p>
        <p className="bgExample">
          <pre>
            {`
  import { name, age } from "./user.js";
         `}
          </pre>
        </p>
        <p>Import a default export from the file text.js:</p>
        <p className="bgExample">
          <pre>
            {`
  import message from "./text.js";
  `}
          </pre>
        </p>

        <h2>ES6 Ternary Operator</h2>
        <p>
          Ternary Opeartor : Ternary operator ek simplified conditional operator
          hai, jaise ki if/else.
        </p>
        <p>
          {`
Syntax: condition ? <expression if true> : <expression if false>
 `}
        </p>
        <p>Yahan ek example if/else ka istemal karke:</p>

        <h3>Example</h3>
        <p>before:</p>
        <p className="bgExample">
          <pre>
            {`
        if (authenticated) {
            renderApp();
        } else {
            renderLogin();
        }
        `}
          </pre>
        </p>
        <p>Yahan ek example Ternary Operator ka istemal karke:</p>
        <h3>Example</h3>
        <p>with Ternary Operator</p>
        <p className="bgExample">
          {`authenticated ? renderApp() : renderLogin();`}
        </p>
        <br />
        <h2>React Render HTML</h2>
        <p>
          React ka goal hai in many ways ke ek web page mein HTML ko render
          karna hai.
        </p>
        <p>
          React HTML ko web page par createRoot() naam ke ek function aur uske
          render() method ka istemal karke render karta hai.
        </p>
        <h3>The createRoot Function</h3>
        <p>createRoot() function ek argument leta hai, ek HTML element</p>
        <p>
          Is function ka purpose yeh hai ki define kare ki kahan ek React
          component ko dikhaya jana chahiye.
        </p>
        <h3>The render Method</h3>
        <p>
          Phir render() method ko call kiya jata hai taki define ho sake ki
          kaunsa React component render kiya jana chahiye.
        </p>
        <p>Lekin kahaan render karein?</p>
        <p>
          Aapke React project ke root directory mein ek aur folder hai jiska
          naam hai "public". Is folder mein ek index.html file hai.
        </p>
        <p>
          Aapko is file ke body mein ek {`<div>`}dikhayi dega. Yahi par hamara
          React application render hoga.
        </p>
        <h3>Example</h3>
        <p>Ek paragraph ko id "root" wale element ke andar display karien</p>
        <p className="bgExample">
          <pre>
            {`
 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(<p>Hello</p>);`}
          </pre>
        </p>
        <p>result id "root" wale {`<div>`} element mein display hota hai</p>
        <p>
          <pre>
            {`<body>
      <div id="root"></div>
      </body>`}
          </pre>
        </p>
        <p>
          Dhyaan rahe ki element id ko "root" hi kaha jana jaruri nahi hai,
          lekin yeh ek standard convention hai.
        </p>
        <h3>The HTML Code</h3>
        <p>
          Is tutorial mein istemal ki gayi HTML code JSX ka istemal karta hai,
          jo aapko JavaScript code ke andar HTML tags likhne me help karti hai:
        </p>
        <p>
          Ghabrayein nahi agar syntax naya lag raha hai, aap agle chapter mein
          JSX ke baare mein aur bhi seekhenge.
        </p>
        <h3>Example</h3>
        <p>
          Ek variable banaiye jo HTML code ko contain kare aur use "root" node
          mein dikhayein:
        </p>
        <p className="bgExample">
          <pre>
            {`
        const myelement = (
            <table>
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>John</td>
              </tr>
              <tr>
                <td>Elsa</td>
              </tr>
            </table>
          );
          
          const container = document.getElementById('root');
          const root = ReactDOM.createRoot(container);
          root.render(myelement);
        `}
          </pre>
        </p>
        <h3>The Root Node</h3>
        <p>
          Root node woh HTML element hai jahan aap result dikhana chahte hain.
        </p>
        <p>
          Yeh React dwara manage kiye gaye content ke liye ek container ki tarah
          hai.
        </p>
        <p>
          {" "}
          ise ek {`<div>`} element hone ki jarurat nahi hai aur isme id='root'
          hone ki bhi zarurat nahi hai:
        </p>
        <h3>Example</h3>
        <p>
          Root node ko aap jo kuch bhi chahein us naam se bulana sakte hain:
        </p>
        <p className="bgExample">
          <pre>
            {`
<body>

<header id="sandy"></header>

</body>

`}
          </pre>
        </p>
        <p>Display the result in the{` <header id="sandy"> `} element:</p>
        <p className="bgExample">
          <pre>
            {`
        const container = document.getElementById('sandy');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Hallo</p>);
        `}
          </pre>
        </p>
        <br />
        <h2>React JSX</h2>
        <h3>What is JSX (JSX kya hai)?</h3>
        <p>JSX ka matlab hai JavaScript XML.</p>
        <p>JSX humein React mein HTML likhne me help karta hai.</p>
        <p>JSX se React mein HTML likhna aur use add karna aasan ho jata hai</p>
        <h3>Coding JSX</h3>
        <p>
          JSX humein HTML elements ko JavaScript mein likhne me help karta hai
          aur unhe createElement() aur appendChild() methods ke bina DOM mein
          place karna allow karta hai
        </p>
        <p>JSX HTML tags ko React elements mein convert karta hai.</p>
        <p className="bgYellow">
          Aapko JSX ka istemal karna necessary nahi hai, lekin JSX se React
          applications likhna aasan ho jata hai
        </p>
        <p>
          Yahan do examples hain. Pehla JSX ka istemal karta hai aur doosra
          nahi:
        </p>
        <h3>Example 1</h3>
        <p>JSX :</p>
        <p className="bgExample">
          <pre>
            {`
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`}
          </pre>
        </p>
        <h3>Example 2</h3>
        <p>Without JSX :</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    `}
          </pre>
        </p>
        <p>
          Jaise ki aap pehle example mein dekh sakte hain, JSX humein JavaScript
          code ke andar seedhe HTML likhna allow karta hai."
        </p>
        <p>
          JSX JavaScript ke ES6 par based ek extension hai, aur runtime mein ise
          regular JavaScript mein translate kiya jata hai.
        </p>
        <h3>Expressions in JSX</h3>
        <p>
          JSX ke saath aap curly braces {} ke andar expressions likh sakte hain.
        </p>
        <p>
          Expressions ek React variable, ya property, ya koi other JavaScript
          expression ho sakta hai. JSX expression execute karega aur result
          return karega:
        </p>
        <h3>Example</h3>
        <p>Execute the expression 5 + 5:</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;`}
          </pre>
        </p>
        <h3>Inserting a Large Block of HTML</h3>
        <p>
          HTML ko multiple lines par likhne ke liye, HTML ko parentheses ke
          andar rakhein:
        </p>
        <h3>Example</h3>
        <p>Create a list with three list items:</p>
        <p className="bgExample">
          <pre>
            {`
 const myElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );`}
          </pre>
        </p>
        <h3>One Top Level Element</h3>
        <p>HTML code ko ek hi top level element mein wrap kiya jana chahiye.</p>
        <p>
          To agar aap do paragraphs likhna chahte hain, to aapko unhe ek parent
          element ke andar rakhna hoga, jaise ki ek div element.
        </p>
        <h3>Example</h3>
        <p>Do paragraphs ko ek DIV element ke andar wrap karein:</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = (
        <div>
          <p>I am a paragraph.</p>
          <p>I am a paragraph too.</p>
        </div>
      );
    `}
          </pre>
        </p>
        <p className="bgYellow">
          Agar HTML sahi nahi hai ya HTML mein kisi parent element ki kami hai,
          to JSX ek error throw karega.
        </p>
        <p>
          Alternatively, aap "fragment" ka istemal karke multiple lines ko wrap
          kar sakte hain. Isse DOM mein unnecessarily extra nodes add hone se
          bacha ja sakta hai.
        </p>
        <p>
          Ek fragment ek empty HTML tag ki tarah dikhta hai: <></>
        </p>
        <h3>Example</h3>
        <p>Do paragraphs ko ek fragment ke andar wrap karein:</p>
        <p className="bgExample">
          <pre>
            {`
   const myElement = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );`}
          </pre>
        </p>
        <h3>Elements Must be Closed</h3>
        <p>
          JSX XML ke rules follow karta hai, isliye HTML elements ko sahi se
          close karna zaroori hai.
        </p>
        <h3>Example</h3>
        <p>Close empty elements with {`/> `}</p>
        <p className="bgExample">{`const myElement = <input type="text" />;`}</p>
        <p className="bgYellow">
          Agar HTML sahi se close nahi kiya gaya hai, to JSX ek error throw
          karega."
        </p>

        <h3>Attribute class = className</h3>
        <p>
          <span className="clrRed">Class</span> attribute HTML mein ek bahut
          jyada istemal hone wala attribute hai, lekin kyun ki JSX JavaScript ke
          roop mein render hota hai, aur <span className="clrRed">class</span>{" "}
          keyword JavaScript mein ek reserved word hai, isliye aapko ise JSX
          mein istemal karne ki anumati nahi hai.
        </p>
        <p>Iski jagah attribute ka istemal karein.</p>
        <p>
          JSX ne is problem ko solve <span className="clrRed">className</span>{" "}
          ka istemal karke kiya. Jab JSX render hota hai, to ye attributes ko
          class attributes mein translate karta hai.
        </p>

        <h3>Example</h3>
        <p>
          Use karo attribute <span className="clrRed">className</span> instead
          of class in JSX:
        </p>
        <p className="bgExample">{`const myElement = <h1 className="myclass">Hello World</h1>;`}</p>
        <h3>Conditions - if statements</h3>
        <p>
          React <span className="clrRed">if</span> statements ko support karta
          hai, lekin JSX ke andar nahi.
        </p>
        <h4>Option 1 :</h4>
        <p>
          JSX code ke bahar <span className="clrRed">if</span> statements
          likhein:
        </p>
        <h3>Example</h3>
        <p>
          Write "Hello" if x is less than 10, otherwise "Goodbye": (Agar x 10 se
          kam hai, to "Hello" likhein, otherwise "Goodbye" likhein:)
        </p>
        <p className="bgExample">
          <pre>
            {`
        const x = 5;
        let text = "Goodbye";
        if (x < 10) {
          text = "Hello";
        }
        
        const myElement = <h1>{text}</h1>;`}
          </pre>
        </p>
        <h4>Option 2</h4>
        <p>ternary expressions ko istemal karein instead:</p>
        <h3>Example</h3>

        <p>
          Write "Hello" if x is less than 10, otherwise "Goodbye". (Agar x 10 se
          kam hai, to "Hello" likhein, anyatha "Goodbye" likhein:)
        </p>
        <p className="bgExample">
          <pre>
            {`
        const x = 5;

        const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;`}
          </pre>
        </p>
        <p className="bgYellow">
          Dhyaan rahe ki JSX ke andar ek JavaScript expression ko shamil karne
          ke liye, JavaScript ko curly braces, {} ke saath wrap kiya jana
          chahiye.
        </p>
        <br />
        <h2>React Components</h2>
        <p>
          Components functions jaise hote hain jo HTML elements return karte
          hain.
        </p>
        <h3>React Components</h3>
        <p>
          Components independent aur reusable code ke tukde hote hain. Ye
          JavaScript functions ke jaise kaam karte hain, lekin isolation mein
          kaam karte hain aur HTML return karte hain.
        </p>
        <p>
          Components do prakar ke hote hain, Class components aur Function
          components. Is tutorial mein ham Function components par dhyan denge.
        </p>
        <h3>Create Your First Component</h3>
        <p>
          Jab aap ek React component banate hain, to component ka naam UPAR CASE
          ke letter se shuru HONA CHAHIYE
        </p>
        <h4>Class Component</h4>
        <p>
          Ek class component mein extends React.Component statement include hona
          chahiye. Ye statement React.Component ke liye inheritance create karta
          hai, aur aapke component ko React.Component ke functions ko access
          karne ka permission deta hai.
        </p>
        <p>
          Component ko bhi ek render() method ki requirement hoti hai, yeh
          method HTML return karta hai.
        </p>
        <h3>Example</h3>
        <p>Create a Class component called Car</p>
        <p className="bgExample">
          <pre>
            {`
  class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }`}
          </pre>
        </p>
      </div>
    </div>
  );
}
