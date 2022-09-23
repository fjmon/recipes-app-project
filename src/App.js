import React from 'react';
import Provider from './context/MyContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <main>
        <h1>teste</h1>
      </main>
    </Provider>
  );
}

export default App;
