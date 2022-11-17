import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import { endpoint } from "../constants/url";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, error, isPending } = useFetch(endpoint + id );
    const navigate = useNavigate();

    const handleClick = () => {

        if (window.confirm(`Are you sure you wish to delete this blog : ${blog.title}`)){
            fetch(endpoint + blog.id, {
                method: 'DELETE'
            })
            .then(() => {
                navigate('/');
            })
        }

        else return;  
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2> {blog.title }</h2>
                    <p> Written By: {blog.author}</p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            ) }
            {/* <h2>Blog Details - {id} </h2> */}
        </div>
     );
}

export default BlogDetails;