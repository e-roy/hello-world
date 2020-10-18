import React, { useEffect, useState } from 'react';
import './App.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <div>
          <p>Current time:</p>
          <Clock value={value} />
        </div>
      </header>
    </div>
  );
}

export default App;
