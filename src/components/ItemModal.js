import React from 'react';

const ItemModal = ({id, style})=>{
  
  const ShowModal = ()=>{
    document.getElementById(id).classList.add("is-active")
  }

  const HideModal = ()=>{
    document.getElementById(id).classList.remove("is-active")
  }

  return (  
    <div> 
      <a 
        class="button is-small is-primary" 
        onClick={ShowModal}
        >Add a new item</a>
      <div id={id} className="modal">
        <div onClick={HideModal} className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button onClick={HideModal} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <span>Hello world</span>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;