import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksApi } from '../../Redux/actions/booksActions';
import Loader from '../../Utils/loder'
import { useHistory, useRouteMatch } from 'react-router';

const Books = () => {
    
    const dispatch = useDispatch()

    const books= useSelector(state => state.bookReducer.books)
    // const [ projectId, setProjectId ] = useState("");
	let match = useRouteMatch();

	let history = useHistory();
const handleBook = (id) => {
    history.push(`${match.url}/${id}`);

}

console.log(books)
    useEffect(() => {
        
        
dispatch(getBooksApi())



    },[])

if(books.length === 0) {
    return <Loader/>
}
else {

    return (
        <div>       
        
         <div className="d-flex justify-content-center align-items-center flex-wrap">

        {books.map((book) => {
            return (
    <div className="card col-lg-6 col-md-12 col-sm-12 col-xs-12 m-5 rounded book-card" style={{width:400, height:600}}>
  <img src={book.bookImg} className="card-img-top h-50" alt={book.pages}/>
  <div className="card-body ">
    <h5 className="card-title">{book.bookName}</h5>
    <p className="card-text">{book.description}</p>
    <button type="button" className="btn btn-primary" onClick={() => handleBook(book._id)}>Click More</button>
  </div>
</div>
            
            )   

        })}

        </div>

        </div>
    )
}



}

export default Books