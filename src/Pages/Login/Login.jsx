import Lottie from "lottie-react";
import animationData from "../../assets/lottiefile/login.json";

const Login = () => {
  return (
    <div className="flex w-full flex-col-reverse lg:items-center lg:flex-row-reverse h-[calc(100vh-2rem)] relative">
       {/* Form */}
       
      <div className="w-full absolute lg:relative h-full  z-10 top-0 lg:top-1/2 left-0 lg:w-1/2 bg-white/75 lg:bg-white backdrop-blur-sm  flex justify-center items-center">
        <form className="max-w-sm w-full p-6">
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </form>
      </div>
      {/* LottieFiles Animation */}
      <div className="w-full   lg:w-1/2 bg-gray-200 flex justify-center items-center">
        <Lottie animationData={animationData} className="h-[calc(100vh-2rem)]"   />
      </div>
      
      
    </div>
  );
};

export default Login;
