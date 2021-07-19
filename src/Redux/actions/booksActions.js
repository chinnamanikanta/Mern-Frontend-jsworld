
import {GET_BOOKS,GET_SINGLE_BOOK} from '../actionTypes.js/bookActionTypes'
import {authAPI} from '../../Utils/apiVariables'
export function getBooks(books) {
    return {
        type:GET_BOOKS,
        books
    }
}

export function getSingleBook(book) {
    return {
        type:GET_SINGLE_BOOK,
        book
    }


}


export const getBooksApi = (body) => (dispatch, getState, {api, Toast}) => {
  return new Promise((resolve, reject) => {
    api({...authAPI.getBooks, body})
      .then((response) => {
    
          dispatch(getBooks(response.data.data))
        // resolve(response.data);
        // if (response.data.success) {
        //   Toast({type: "success", message: response.data.message, time: 3000});
        //   window.location.href = '/dashboard'
        // } else {
        //   Toast({type: "error", message: response.data.message, time: 3000});
        // }
      })
      .catch((error) => {
        reject(Toast({type: "error", message: error.toString(), time: 3000}));
      });
  });
};



export const getSingleBookApi = (id) => (dispatch, getState, {api, Toast}) => {
  return new Promise((resolve, reject) => {
   
    api({...authAPI.getSingleBook(id), body:""})
      .then((response) => {
      
  console.log("end",response.data.data)
          dispatch(getSingleBook(response.data.data))
        // resolve(response.data);
        // if (response.data.success) {
        //   Toast({type: "success", message: response.data.message, time: 3000});
        //   window.location.href = '/dashboard'
        // } else {
        //   Toast({type: "error", message: response.data.message, time: 3000});
        // }
      })
      .catch((error) => {
        reject(Toast({type: "error", message: error.toString(), time: 3000}));
      });
  });
};