import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [userName, setUserName] = useState('');
  console.log(userName);
  console.log('re-renderd');
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUserName={setUserName} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth else" />
      </form>
    </div>
  );
}

export default App;
