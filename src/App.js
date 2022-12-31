import BookForm from './components/BookForm/BookForm';
import BooksList from './components/BooksList/BooksList';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski' }
  ]);

  return (
    <div>
      <h1>Book React App</h1>
      <BooksList books={books} />
      <BookForm />
    </div>
  );
};

export default App;
