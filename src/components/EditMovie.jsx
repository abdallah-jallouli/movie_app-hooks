import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditMovie({oldMovie,handleEdit}) {
  const [name, setName] = useState(oldMovie.name)
  const [image, setImage] = useState(oldMovie.image)
  const [rating, setRating] = useState(oldMovie.rating)
  const [date, setDate] = useState(oldMovie.date)
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleRating = (rating) => setRating (rating);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const editedMovie = {id : oldMovie.id , name , image , rating , date};
    handleEdit(editedMovie);
    closeModal();
    // setName("");
    // setImage("")
    // setRating(1)
    // setDate("")
  }

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='btn' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add new movie</h2> */}
        <button className='btn' onClick={closeModal}>close</button>
        <form onSubmit={handleSubmit}>
          <label > Name : </label>
          <input type='text' value={name} onChange={e =>setName(e.target.value)}/>
          <label > Url : </label>
          <input type='text' value={image} onChange={e =>setImage(e.target.value)}/>
          <StarRating handleRating={handleRating} rating={rating}/>
          <label > Date : </label>
          <input type='date' value={date} onChange={e =>setDate(e.target.value)}/>
          <button className='btn' type='submit' >Submit</button>
        </form>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);
export default EditMovie