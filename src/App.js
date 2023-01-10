import BookForm from './components/BookForm/BookForm';
import BooksList from './components/BooksList/BooksList';

const App = () => {
  return (
    <div>
      <h1>Book React App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
};

export default App;
