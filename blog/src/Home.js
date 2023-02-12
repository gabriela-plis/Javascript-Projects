import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>is loading...</div> }
            {blogs && <BlogList blogs={blogs} title={"All Blogs:"}/>}
        </div>
     );

    // const [books, setBooks] = useState([
    //     {id: 1, title: 'Murder!', author: 'Gabcik', publish_year: 1999, amount: 10, bookType: 'Crime'},
    //     {id: 2, title: 'Grass is always Greener', author: 'Macik', publish_year: 2010, amount: 100, bookType: 'Classics'},
    //     {id: 3, title: 'Dracula', author: 'Sussane', publish_year: 2000, amount: 50, bookType: 'Horror'}
    // ])

    // return (
    //     <div className="books">
    //         {books.map( book => (
    //             <div className="book" key={book.id}>
    //                 <h2 className="title"> {book.title} </h2>
    //                 <p className="otherInform"> Author: {book.author}   Publish year: {book.publish_year}   Type: {book.bookType} </p>
    //             </div>
    //         ))}
    //     </div>
    // )
}
 
export default Home;