import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  // const [userName, setUserName] = useState('');
  // const userNameRef = useRef();
  // console.log(userName);
  // console.log('re-renderd');
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userNameRef);
    const data = new FormData(e.target);
    console.log(data);
    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <FormInput placeholder="Username" setUserName={setUserName} /> */}
        {/* <FormInput placeholder="Username" refer={userNameRef} /> */}
        <FormInput placeholder="Email" name="username" />
        <FormInput placeholder="Email" name="email" />
        <FormInput placeholder="Full Name" name="fullname" />
        <FormInput placeholder="Sth else" name="sth" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
