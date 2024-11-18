import React, { useState } from "react";
import BottomNavigationProfileHighlighted from "../../../components/users-component/bottombar/bottombar-account";

const AccountSettings = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-gray-200 pb-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1587202372775-54c9d3c8e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-grow container mx-auto p-6">
        {/* Header Section */}
        <nav
          class="text-black font-bold my-8 flex items-center justify-between"
          aria-label="Breadcrumb"
        >
          {/* <!-- Profile Section --> */}
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 19a7.968 7.968 0 011.879-2.243A7.968 7.968 0 0112 16a7.968 7.968 0 015 1.757A7.968 7.968 0 0118.879 19M12 12a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
            <div>
              <h1 class="text-xl font-bold text-gray-800">PROFILE</h1>
            </div>
          </div>

          {/* <!-- Breadcrumb Section --> */}
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center">
              <a href="#" class="text-teal-600 hover:text-teal-800">
                Home
              </a>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            {/* <li class="flex items-center">
              <a href="#" class="text-teal-600 hover:text-teal-800">
                Second Level
              </a>
              <svg
                class="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li> */}
            <li>
              <a href="#" class="text-gray-500" aria-current="page">
                Profile
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://i.pinimg.com/736x/ad/0d/8c/ad0d8c4a911abdef0b3557e20b9a6b45.jpg"
                alt="Profile"
                className="rounded-full w-24 h-24 mb-4 shadow-lg border-4 border-gray-300"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                Muhammad Farhan
              </h2>
              <p className="text-sm text-gray-500 mb-6">Founder</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-2">
                ABOUT ME:
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-gray-400">
                Hi! I'm Muhammad Farhan, a founder with expertise in technology
                and design. Passionate about innovation and creating impactful
                solutions.
              </p>
              <div className="space-y-4">
                {/* Username */}
                <div className="flex items-center text-sm text-gray-600 pb-2">
                  <span className="font-bold mr-2">Username:</span>
                  <span className="text-gray-400">farhan01</span>
                </div>

                {/* Email */}
                <div className="flex items-center text-sm text-gray-600 pb-2">
                  <span className="font-bold mr-2">Email:</span>
                  <span className="text-gray-400">farhan@email.domain</span>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-bold mr-2">Location:</span>
                  <span className="text-gray-400">IDN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              PERSONAL INFO
            </h3>
            <form className="space-y-6">
              {/* Email and Password Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    If you want to change email please{" "}
                    <a
                      href="#"
                      className="text-teal-500 hover:text-teal-700 underline"
                    >
                      click
                    </a>{" "}
                    here.
                  </p>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    If you want to change password please{" "}
                    <a
                      href="#"
                      className="text-teal-500 hover:text-teal-700 underline"
                    >
                      click
                    </a>{" "}
                    here.
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows="6"
                  placeholder="Write something..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                ></textarea>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                >
                  <option value="">Select your location</option>
                  <option value="IDN">Indonesia</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                  <option value="CAN">Canada</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigationProfileHighlighted />
    </div>
  );
};

export default AccountSettings;
