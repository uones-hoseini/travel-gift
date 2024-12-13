import React, { useState } from "react"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import PasswordInput from "../../components/input/PasswordInput"
import { validateEmail } from "../../utils/helper"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    if (!password) {
      setError("Please enter the password")
      return
    }
    setError("")
    //  login Api call
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input onChange={(e) => setEmail(e.target.value)} type="text" value={email} placeholder="Email" className="input-box" />
            <PasswordInput 
            type="text"
             placeholder="Password" 
             className="input-box"
             value={password} 
             onChange={(e)=>setPassword(e.target.value)}
             />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
