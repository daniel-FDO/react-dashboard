import React, { useEffect, useState } from "react";





export const About = () => {
    const name = "Daniel";
    const [post, setPost] = useState([]);


    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPost(json))
    
      
    
    }, [])
    
   
  return (
    <div>
       <p>loading</p>
       {post.map((product) => 
       <div>
        <p>{product.id}</p>
        <p>{product.title}</p>


        </div>
      
      )}

    </div>
   
  );
};
