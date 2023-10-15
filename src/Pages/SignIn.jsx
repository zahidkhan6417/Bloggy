import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Register/SignUp.css'


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
                    <h1> SignIn </h1>
                </div>
                <div className='login-page'>
                    <form onSubmit={handleSubmit}>
                        {error ? (
                            <p className='notif'>
                                Wrong email or password
                            </p>
                        ) : null}
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
                            Sign In
                        </button>
                        <div className='new-user'>
                            <p>New to Bloggy</p>
                            <Link
                                to="/signup"
                                className='new-signup'
                            >
                                Sign Up
                            </Link>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default SignIn