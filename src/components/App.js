import React, { useState } from 'react';
import '../styles/App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <div className="model-overlay" onClick={() => setShowModal(false)}>
          <button className="model-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="model-p">This is the content of the modal</p>
        </div>
      )}
    </div>
  );
}

export default App;
