import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/HeroStyles/RecommendedPost.css"
// import reactHtmlParser from 'react-html-parser'
import moment from "moment";
// import { Link } from "react-router-dom";

const RecommededPosts = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function getStories() {
      await axios
        .get('/blog.json')
        .then((res) => {
          //console.log(res.data.blogs);
          setStories(res.data.blogs?.slice(1, 16));
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
    getStories();
  }, []);
  return (
    <>
        <div className="post">
            <div className="post-container">
                <div className="post-top">
                    <p>TRENDING ON BLOGGY</p>
                </div>
                <div className="rcm-posts">
                    {
                        stories.map((blogs, index) => (
                            <div key={blogs.id} className="blog-item">
                                <h3>{index + 1}.{blogs.title}</h3>
                                <p>Author: {blogs.author}</p>
                            </div>
                        ))}      
                </div>
            </div>
        </div>
    
    </>
  )
};

export default RecommededPosts;