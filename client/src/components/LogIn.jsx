import React,{ useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/blogifyBlack.png"



const LogIn = ({setLoginUser}) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setUser({
    //         ...user,
    //         [name]: value
    //     });
    // };

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8282/users/logIn", {email, password})
            .then(res => {
                alert(res.data);
                setLoginUser(true)
                navigate("/")
            })
            .catch(error => {
                message.error(error.message);
            });
    };
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={Logo} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>
                <form
                   
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="your email"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            onChange={(e)=>setPassword(e.target.value)}
                            name="password"
                            placeholder="your password"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>
                    
                </form>
            </div>
        </main>
    )
}

export default LogIn