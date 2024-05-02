import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-96 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-start text-gray-300 text-balance mb-5">
          Sign up to Maia
        </h1>

        <form onSubmit={registerUser}>
          <div>
            {/* USER NAME INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10 mb-5"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {/* EMAIL INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              className="w-full input input-bordered h-10 mb-5"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {/* PASSWORD INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Create Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 mb-5"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {/* CONFIRM PASSWORD INPUT*/}
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-10 bg-rose-900 border-none">
              Sign Up
            </button>
            <p className="mt-5">
              By creating an account you agree with our Terms of Service and
              Privacy Policy
            </p>
            <Link
              to="/login"
              className="text-sm hover:text-blue-600 mt-4 inline-block"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
