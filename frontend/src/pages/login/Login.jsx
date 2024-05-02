import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    axios.get('/')
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-96 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <h1 className="text-3xl font-semibold text-start text-gray-300 text-balance mb-5">
            Welcome Back!
          </h1>
          <p className="text-justify mb-8">
            Sign in below to access your workspace and continue your projects.
            Let's pick up where you left off!
          </p>

        <form onSubmit={loginUser}>
          <div>
            {/* USERNAME INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input input-bordered h-10 mb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* PASSWORD INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 mb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-4 bg-rose-900 border-none">
              Login
            </button>
            <Link
              to="/signup"
              className="text-sm hover:text-blue-600 mt-4 inline-block"
            >
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
