import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page is not found!</p>
            <Link to='/'>Go to HomePage</Link>
        </div>
     );
}
 
export default NotFound;