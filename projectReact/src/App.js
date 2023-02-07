import logo from './logo.svg';
import { findLongestWord, occurence, totaleleve } from './Ecmascript/atelier';
import { search } from './Ecmascript/search';
// import occurence from './Ecmascript/function';
import './App.css';

const tab = ['hello', 'world', 'yaay', 'Tonight', 'lucky', 'PERSOONNN'];
const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"]
]
let students = [
    { name: 'john', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'wick', id: 115, marks: 75 },
]

function App() {
    let Tab = [];
    let currentId = 0;
  
  // Ajoutez les données initiales dans le tableau
    Tab.push({ name: 'John', age: 30, city: 'New York' });
    Tab.push({ name: 'Jane', age: 25, city: 'London' });
  
  // Ajoutez une propriété ID à chaque objet
    Tab.forEach(obj => obj.id = ++currentId);
  
  // Ajoutez de nouvelles entrées avec la méthode "push"
    Tab.push({ name: 'Jim', age: 35, city: 'Paris' });
  
  // Ajoutez de nouvelles entrées avec la méthode "unshift"
    Tab.unshift({ name: 'Anna', age: 40, city: 'Berlin' });
  
  // Ajoutez une propriété ID à la nouvelle entrée
    Tab[0].id = ++currentId;
  
    let result = search(Tab, 2);
    console.log(result);
    // return ( <
    //     div className = "App" >
    //     <
    //     header className = "App-header" >
    //     <
    //     img src = { logo }
    //     className = "App-logo"
    //     alt = "logo" / >
    //     <
    //     p >
    //     Edit < code > src / App.js < /code> and save to reload. </p > < a className = "App-link"
    //     href = "https://reactjs.org"
    //     target = "_blank"
    //     rel = "noopener noreferrer" >
    //     Learn React < /a> </header >
    //     <
    //     /div>
    // );
    //return (
        //findLongestWord(tab)
        //occurence(input)
        //totaleleve(students)
    //),
}

export default App;