import React from 'react';
import { useGlobalContext } from './context'

const Buttons = () => {
     const { isLoading, page, nbPages, handlePage } = useGlobalContext()

 return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')} className="btn btn-primary bg-primary rounded">
        <i className="fa fa-caret-left" aria-hidden="true"></i> Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')} className="btn btn-primary bg-primary rounded">
       next <i className="fa fa-caret-right" aria-hidden="true"></i> 
      </button>
    </div>
  )



}

export default Buttons