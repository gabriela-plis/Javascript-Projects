import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>The Gabcik blog</h1>
        <div className="links">
            {/* dzięki Link react przy zmianie strony nie wysyla request do serwera tylko sam to obsluguje => szybciej */}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;