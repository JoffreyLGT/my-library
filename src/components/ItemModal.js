import React from 'react';

const ItemModal = ({id})=>{
  
  // Close the modal if the user click somewhere else
  window.addEventListener('mousedown', (event)=>{
    let modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })

  return (   
    <div id={id} class="modal">
      <div class="modal-content">
        <span class="close" onClick={()=>
          document.getElementById("addGameModal").style.display = "none"
        }>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}

export default ItemModal;