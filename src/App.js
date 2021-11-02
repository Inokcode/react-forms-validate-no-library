import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  // const [userName, setUserName] = useState('');
  const userNameRef = useRef();
  // console.log(userName);
  // console.log('re-renderd');
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <FormInput placeholder="Username" setUserName={setUserName} /> */}
        <FormInput placeholder="Username" refer={userNameRef} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
