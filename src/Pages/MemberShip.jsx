import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import "../Styles/MemberShip/Membership.css"


const index = () => {
  return (<>

            <Navbar />
            <div className='member'>
                <div  className='member-top-content'>
                    <p><strong>Fuel great thinking.</strong></p>
                    <p>Become a Bloggy member to enjoy unlimited access <br />
                        and
                       directly support the writers you read most.
                    </p>
                    <button>Get unlimited access</button>
                </div>

                <div className='member-grid'>
                    <div className='member-grid-content'>
                        <div className='grid-left'>
                            <p><strong>Get unlimited access to every story.</strong></p>


                            <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
                        </div>
                        <div className='grid-left'>
                            <p><strong>Support the voices you want to hear more from.</strong></p>


                            <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    
  )
}

export default index