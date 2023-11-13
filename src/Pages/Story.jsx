import React from 'react'
import Navbar from "../Components/Navbar"
import RecommededPosts from '../Components/RecommendedPost'
import Footer from '../Components/Footer'
import "../Styles/Story/story.css"
// import Downarrow from '../Styles/Downarrow'
const Story = () => {
  return (
    <>
      <div className='upper-part'>
        <h1 className='headers'>Everyone has a story to tell.</h1>
        <p className='story-para'>Bloggy is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Bloggy is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>
        <p className='story-para1'>We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
        <div className='header2-section'>
          <h1 className='header2'>Start Reading </h1> 
          <section className='arrow'>
                <a href="#">
                <div id="mouse-scroll">
                <div className="mouse">
                    <div className="mouse-in"></div>
                </div>
                <div>
                    <span className="down-arrow-1"></span>
                    <span className="down-arrow-2"></span>
                    <span className="down-arrow-3"></span>
                </div>
                </div>
                </a>
          </section>
        </div>
      </div>
      
      <div className='components'>
        <Navbar />
        <RecommededPosts />
        <Footer />
      </div>
    </>
  )
}

export default Story