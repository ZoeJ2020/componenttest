import Hello from './Hello';
import Goodbye from './Goodbye';
import Patient from './Patient';
import Department from './Department';
import Medication from './Medication';
import Counter from './Counter';
import './App.css';


// FUNCTIONAL COMPONENT
function App() {
  return (
    <> 
    {/* <></> are empty react fragments, used to return multiple parent elements */}
      <Hello/>
      <Goodbye/>
      <Patient name='Zoe' age='19'>
        <Department department='x-ray' doctor='Dr Jekyll'></Department>
      </Patient>
      <Medication medicine='Paracetamol' dose='3ml, three times a day'/>
      <Counter/>
    </>
  );
}

export default App;
