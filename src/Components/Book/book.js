import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleBookApi } from '../../Redux/actions/booksActions';
import Loader from '../../Utils/loder';

const SingleBook = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    

    
    const book = useSelector(state => state.bookReducer.book);
  
console.log(book)
    useEffect(() => {
dispatch(getSingleBookApi(id))

    },[])

    if(book.length === 0) {
      return <Loader/>
    }
    else {

return (
  
  <div className="card mb-3 mt-4 w-50  container">
  <img src={book.bookImg} className="card-img-top" alt={book._id}/>
  <div className="card-body">
    <h5 className="card-text"><b>Book Name : </b> {book.bookName}</h5>
    <p className="card-text"><b>Author :</b> {book.author}</p>
    <p className="card-text"><b>About Book : </b> {book.description}</p>
     <p className="card-text"><b>No Of Likes : <i className="fa fa-thumbs-o-up text-success" aria-hidden="true"/></b> {book.likes}</p>
      <p className="card-text"><b>No Of DisLikes : <i class="fa fa-thumbs-o-down text-error" aria-hidden="true"></i></b> {book.dislikes}</p>
       <p className="card-text"><b>Rating : <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i></b> {book.rating}</p>
    <p className="card-text"><b>Webiste Link: </b> {book.website}</p>

  </div>


</div>



    
    
    )
    }
}

export default SingleBook