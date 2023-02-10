import shortid from 'shortid';

const booksReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return {
        ...statePart,
        books: statePart.books.filter((book) => book.id !== action.payload)
      };
    case 'ADD_BOOK':
      return {
        ...statePart,
        books: [...statePart.books, { ...action.payload, id: shortid() }]
      };

    default:
      return statePart;
  }
}

export default booksReducer
