import { useState } from "react";
import { signIn, signUp } from "../hooks/authHooks";


function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(formData.email,formData.password)
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    signUp(formData.email,formData.password)
  }



   const [isDiv1Visible, setIsDiv1Visible] = useState(true);
  const toggleDivs = () => {
    setIsDiv1Visible(!isDiv1Visible);
  };

  return (
    <div className="border p-10 rounded-lg">
      <p>Dont have an Account</p>
      <button
        onClick={toggleDivs}
        className="rounded-lg m-2 text-blue-600 underline"
      >
        {isDiv1Visible ? "Create an Account" : "Sign In"}
      </button>
      {isDiv1Visible ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <h1 className="text-center text-2xl">Sign In</h1>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Enter your Username"
              className="border p-3 rounded-lg "
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="border p-3 rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded-lg hover:bg-blue-900 "
          >
            Sign In
          </button>

        </form>
      ) : (

        //Sign up Form

        <div >
         <p>Already a User</p>
          <form onSubmit={handleSignUpSubmit} className="space-y-3">
            <p>Enter details to crate an Account</p>
            <div>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email"
                className="border p-3 rounded-lg "
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="border p-3 rounded-lg"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 w-full rounded-lg hover:bg-blue-900 "
            >
             Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignIn
