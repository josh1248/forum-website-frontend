import { BACKEND_API_LINK, API_GET_ALL_POSTS } from "../configs/config";
import Post from "../types/Post";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SeePosts: React.FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(BACKEND_API_LINK + API_GET_ALL_POSTS);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map((post: Post) => (
                    <>
                        <li key={post.postid}>
                            <strong>{post.title}</strong>
                            <br />
                            {post.content}
                            <ul>
                                Made by user ID: <strong>{post.userid}</strong>
                            </ul>
                            <ul>
                                Reputation score: <strong>{post.reputation}</strong>
                            </ul>
                        </li>
                        <br />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default SeePosts;
