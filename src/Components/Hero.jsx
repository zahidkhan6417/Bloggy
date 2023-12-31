import React from 'react'
import "../Styles/HeroStyles/Hero.scss"
import RecommendedPost from './RecommendedPost'
import Footer from './Footer'

function Hero() {
  return (
    <>
        <section id='home' className='hero'>
            <div className='container'>
                <div className='hero-text'>
                    <h1> Hey, We Are Bloggy.</h1><br/>
                    <p>See our thoughts, stories and ideas.</p>

                </div>
            </div>
        </section>
        <RecommendedPost />
        <Footer />

    </>
  )
}

export default Hero