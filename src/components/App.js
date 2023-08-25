
import React, {useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <button onClick={()=>setShowModal(true)}>Show Modal</button>
        { showModal && (
        <div className="model-overlay">
        <Modal show={showModal} onClose={() => setShowModal(false)}>
        This is the content of the modal
      </Modal>
        </div>
        )}
    </div>
  )
}

export default App
