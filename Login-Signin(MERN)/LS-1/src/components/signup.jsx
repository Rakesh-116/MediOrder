import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../styles/signup.css';

function Signup(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3009/register', {name, email, password})
        .then((result)=>{
            console.log(result);
            navigate('/');
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div className="bg-container d-flex justify-content-center align-items-center vh-100">
            <div>
                <div className="b1 text-center">
                    <h2>Register</h2>
                </div>
                <div className="card p-3 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input type="text" placeholder='Enter Name' autoComplete='off' name="name" 
                            className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input type="email" placeholder='Enter Email' autoComplete='off' name="email"
                            className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input type="password" placeholder='Enter Password' autoComplete='off' name="password"
                            className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)}/>                        
                        </div>
                        <button type="submit" className='btn1 w-100'>
                            Register
                        </button>
                    </form>
                    <p>Already have an account?</p>
                    <Link to="/" className='btn btn-default w-100 border rounded-3 bg-light text-decoration-none'>
                        Login
                    </Link>          
                </div>
            </div>
        </div>
    )

}

export default Signup;