import BookDetail from '../components/BookDetail';
import GoToButton from '../components/GoToButton';

function Detail() {
  return (
    <>
    <div>    
      <h1>Detail</h1>
      <p>Welcome to the detail view.</p>
      <BookDetail />
      <GoToButton path="/" element="Home" />
    </div>
    </>
  )
}

export default Detail