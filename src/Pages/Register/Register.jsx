import { FaGoogle } from "react-icons/fa";

import Lottie from "lottie-react";
import animationData from "../../assets/lottiefile/register.json";
import { useAuth } from "../../Provider/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, loginWithGoogle, loading, setLoading } = useAuth();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    try {
      const user = await register(email, password, name, photoUrl);
      // console.log({email,password});
      console.log(user);
    } catch (error) {
      setError(error.code);
      setLoading(false);
      console.log({ error });
    }
  };
  // Register with google
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const user = await loginWithGoogle();
      console.log(user);
    } catch (error) {
      console.log({ error });
      setLoading(false);
      setError(error.code);
    }
  };
  console.log({ loading, error });
  return (
   <>
  
    <div className="bg-[#E5E7EB] lg:h-[calc(100vh-4.5rem)]  flex flex-col lg:flex-row-reverse justify-center items-center py-8">
    <div className="w-full max-w-md lg:w-1/2">
      <div className=" shadow-lg  rounded-lg p-5">
        <h1 className="text-xl font-semibold mb-4">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              
              className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              
              className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              
              className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              
              className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md">
              Register
            </button>
    <Link to="/auth/login" className="mt-4 text-blue-500"> Already have an account? Login</Link>
          </div>
        </form>
        <div className="flex flex-col w-2/4 mx-auto border-opacity-50">
          <div className="divider my-2">OR</div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className={`text-white bg-gradient-to-br   font-bold py-2 px-4 btn btn-circle btn-outline ${loading?"from-green-800 via-yellow-600 to-red-500":"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}`}
            >
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <hr />
    <div className="w-full   lg:w-1/2 bg-gray-200 flex justify-center items-center">
        <Lottie
          animationData={animationData}
          className="rounded-xl"
        />
      </div>
  </div>
    </> 
  );
};

export default Register;

