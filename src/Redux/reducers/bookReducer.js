const { GET_BOOKS, GET_SINGLE_BOOK } = require("Redux/actionTypes.js/bookActionTypes");

const initialState = {books:[], book:{}};

export default function bookReducer(state = initialState,action) {
    switch (action.type) {
        case GET_BOOKS : 
        return {
            ...state,
            books:action.books,
            book:{}


        }
        case GET_SINGLE_BOOK : 
        return {
            ...state,
            books:[],
            book:action.book
        }


        default : return state
    }

}

