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
    <div className="flex w-full flex-col-reverse lg:items-center lg:flex-row-reverse h-[calc(100vh-2rem)] relative">
      {/* Form */}
      <div className="w-full absolute lg:relative h-full  z-10 top-0 left-0 lg:w-1/2 bg-[#E5E7EB]/75 lg:bg-[#E5E7EB] backdrop-blur-sm  flex justify-center items-center flex-col">
        <form onSubmit={handleRegister} className="max-w-sm w-full px-6 py-3">
          <h1 className="text-2xl font-bold mb-6">Register</h1>
          <div className="mb-3">
            <label
              className="block mb-1 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-1 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-1 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-1 text-sm font-bold text-gray-700"
              htmlFor="photoUrl"
            >
              Photo Url
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              id="photoUrl"
              name="photoUrl"
              placeholder="Enter your photoUrl"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`text-white font-bold py-2 px-4 rounded ${loading?"bg-blue-300":"bg-blue-500 hover:bg-blue-700  "}`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
          {error && <p className="text-red-600 font-bold">{error}</p>}
        </form>
        <div className="flex flex-col w-1/4 border-opacity-50">
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

        <Link to="/auth/login" className="mt-4 text-blue-500"> Already have an account? Login</Link>
      </div>
      {/* LottieFiles Animation */}
      <div className="w-full   lg:w-1/2 bg-gray-200 flex justify-center items-center">
        <Lottie
          animationData={animationData}
          className="h-[calc(100vh-2rem)]"
        />
      </div>
    </div>
  );
};

export default Register;

