import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./layout/Footer";

export default function BlogList() {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {

        (async () => {
            const response = await fetch(
                "/.netlify/functions/get-blog-post-list",
                {method: "GET"}
            ).then((response) => response.json());
            setPosts(response);
        })();
        
    }, []);

    if (posts.length === 0) {

        return (
            <div class="p-8 bg-violet-300">
                <div class="p-6 text-3xl font-serif">
                    Loading posts...
                </div>
            </div>
        )

    } else {

        return (

            <div class="container p-8 bg-slate-100">

                <div class="p-6 text-4xl">
                    News
                </div>
             
                <div className="street-list" class="p-8">

                    {posts.data.map((post) => (

                        <div 
                            className="text-2xl p-3"
                            key={post.title} onClick={() => setSelectedPost(post)}>
                            <div class="text-base p-3">
                                {post.published}
                            </div>
                            <Link to={`/news/${post.slug}/`}>
                                {post.title}
                            </Link>
                            
                        </div>

                    ))}

                </div>

                <div>
                    <Footer/>
                </div>
    
            </div>
        )
    }

};