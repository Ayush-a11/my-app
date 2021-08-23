import logo from './logo.svg';
import './App.css';
import Hello from './Components/hello';
import Greet from './Components/Greet'
import ES6 from './Components/ES6'
import TextChangeState from './Components/TextChangeState';
import Counter from './Components/Counter'
import EventBind from './Components/EventBind';
import ParentFunction from './Components/ParentFunction';
import ListComponent from './Components/ListComponent';
function App() {
  return (
    <div className="App">
  {/*  <Hello name="Ayush">
      this is the childen tag of uppper line
    </Hello>
    <Hello name="Bob"/>
    <button>Action</button>
    <Hello />
    <Greet name="mritunjay"></Greet>
    <Greet name="ayush"></Greet>
    <ES6></ES6>
    <TextChangeState></TextChangeState>  from here state will be used*
    <Counter></Counter>*/} 

    {/* from here Event Binfixes will be used*/}
    {/* <EventBind></EventBind> */}

    {/* calling parent function from child */}
    {/* <ParentFunction></ParentFunction> */}

    {/* Rendering a list */}
    <ListComponent/>

   
    
    


    </div>
  );
}

export default App;
