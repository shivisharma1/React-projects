import BlogList from "../components/BlogList";
import useFetch from "../helpers/useFetch";
import { endpoint } from "../constants/url";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch(endpoint); //renaming data as blogs and using

    return ( 
        // && means => if blogs!= null (false) then only evaluates the next
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
     );
}

export default Home;