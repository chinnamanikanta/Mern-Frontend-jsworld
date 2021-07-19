import React,{useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
export default function JsQuiz() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const courseArray = ['Java Script', 'AngulerJs','ReactJs','VueJs','NodeJs']
    return (

        <div>
        <h2 className="m-5">Hello, Please Choose Your Test: </h2>
        
                <div className="d-flex justify-content-center align-items-center flex-wrap rounded m-5">

        {courseArray.map((course) => {
            return  (
<div className="card m-3 col-lg-6 col-md-12 col-sm-12 col-xs-12 m-5 rounded" style={{"width":250}}>
  <div className="card-body w-75 p-8 ">
    <br/>
    <br/>
    <br/>
    <br/>
    <h5 className="card-title">{course}</h5>
    <br/>
    <br/>
    <br/>
    <br/>
    <button type="button" className="btn btn-success" onClick={() => setModalIsOpen(true)}>Take Test <i class="fa fa-arrow-right" aria-hidden="true"></i></button>

<Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }
        }}
 
      >
      <div className="m-5">
        <h2>Sorry for that, this is demo purpose version - 1</h2>

        <br/>
        <br/>
        <br/>
        <div>Version-2 will be coming soon!!!!</div>
        <br/>
        <br/>
        <br/>
        <div>
          <button onClick={() => setModalIsOpen(false)} className="btn btn-warning">Close <i class="fa fa-window-close" aria-hidden="true"></i></button>
        </div>
        </div>
      </Modal>
</div>  
</div>



            
            )

        })}
            
        </div>
        </div>
    )
}
