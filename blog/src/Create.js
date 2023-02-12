import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory(); // 6 - useNavigate

    const handleSubmit = (e) => {
        e.preventDefault(); //przy wcisnieciu buttona strona nie odswieza sie

        const blog = { title, body, author };
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then((resp) => {
            console.log("OK, ADDED");
        
            setIsLoading(false);
            // history.go(-1); cofa się do url co ostatnio był
            history.push('/') //redirect
        })


    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => {setTitle(e.target.value);}}
                />
                <label>Blog body:</label>
                <textarea
                    required 
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    required
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option name="mario">mario</option>
                    <option name="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>add blog</button>}
                {isLoading && <button disabled>adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;