import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchPostDetails = (userId) => {
    return axios.get(`https://dummyjson.com/users/${userId}`);
};

const PostsById = () => {
    const {id : postId} = useParams();
    console.log(postId); // Check the entire params object
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts", postId],
        queryFn: () => fetchPostDetails(postId), // Fetch details using postId
        enabled: !!postId // Ensures the query only runs if postId is defined
    });

    console.log("data", data);

    if (isLoading) {
        return <div>Page is loading...</div>;
    }

    if (isError) {
        console.error("Error fetching post details:", error); // Log the error for debugging
        return <div>Error: {error.message}</div>;
    }

    // Access the user details directly from the data structure
    const { firstName, lastName, email, phone, age } = data?.data || {};

    return (
        <div className="post-details-container">
            <h2 className="post-details-title">{`${firstName} ${lastName}`}</h2>
            <div className="post-details-age">Age: {age}</div>
            <div className="post-details-email">Email: {email}</div>
            <div className="post-details-phone">Phone: {phone}</div>
            {/* Add more details as needed */}
        </div>
    );
};

export default PostsById;
