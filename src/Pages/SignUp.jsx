import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Register/SignIn.css'



const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await SignIn(email,password)
            navigate("/#Home")
            goTop()
        } catch(error) {
            console.log(error)
            setError(error.message)
        }
    };

    return (
        <>
            <section className='login-section'>
                <div className='login-banner'>
                    <h1> Sign Up </h1>
                </div>
                <div className='login-page'>
                    <form onSubmit={handleSubmit}>
                        <label className='email-field'>
                            Email
                        </label>
                        <input
                            className='email__field'
                            placeholder='user@gmail.com'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label className='pass-field'>
                            password
                        </label>
                        <input
                            className='pass__field'
                            placeholder='password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <button 
                            className='btn-1'
                            type='submit'
                        >
                            Sign Up
                        </button>
                        <div className='existing-user'>
                            <p>already have an account</p>
                            <Link
                                to="/signin"
                                className='existing-signup'
                            >
                                Sign In
                            </Link>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default SignIn