import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PostsRQ = () => {
  const { data, isLoading, isError ,isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get('https://dummyjson.com/users'),
    staleTime : 20000 //react query wont fetch for next 20sec 
  });

    // unique query key eg-1,2,3
  //posts ["posts"]
  //posts/1  ["posts",post.id]
  //posts/1/comments  ["posts",post.id,"comments"] 

  //isLoading for state and also  isFethcign to understand theu query request better 
  console.log({isLoading, isFetching})

  console.log("data", data)


  //by default the request is stale after inital fetch 
  // by marking the istale :30ms reeact query wont fetch the data again and again for next 30seconds

  //if we want to poll request data updates ferquently we use refetchInterval :10ms and refetchIntervalInBackground : true 


  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{isError.message}</div>;
  }

  return (
    <div>
      {/* Render your posts here */}
    </div>
  );
};

export default PostsRQ;