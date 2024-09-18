import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PostsButton() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () => axios.get('https://dummyjson.com/users'),
        enabled: false
    });
    //refetch to prevent react query to render immediately and trigger it on some action
    // request is always fresh in this case as it assumes the respone is not ge4tting modified 

    console.log("users " , data.data.users)

    if (isLoading) {
        return <div>Page is loading...</div>;
    }

    if (isError) {
        return <div>{isError.message}</div>;
    }

    return (
        <div>
            {/* Render your posts here */}
            <button className='bg-purple-400' onClick={refetch}>Click me to fetch some data</button>

            <div>
                <ul>
                    {
                        data?.data.users.map((user, i) => (
                            <Link key={i} to={`/users/${user.id}`}>
                            <li >{user.firstName}</li>
                            </Link> 
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
