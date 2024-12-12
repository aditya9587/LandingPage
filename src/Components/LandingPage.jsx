import React from "react";

function LandingPage() {
  return (
    <div className="w-full h-screen box-border font-sans">
      <div className="flex justify-around h-max p-1 items-center">
        <h1 className="text-3xl text-red-400">Website</h1>
        <div className="flex gap-5 ">
          <p>Practice</p>
          <p>Internships</p>
          <p>jobs</p>
          <p>Compete</p>
          <p>Mentorship</p>
          <p>Coursers</p>
        </div>

        <div className="flex gap-5">
          <button className="bg-red-400 p-1 rounded-xl h-1/2 w-14 text-center text-white">
            Login
          </button>
          <button className="rounded border-blue-200 border-2 h-1/2 w-14 p-1">
            Host
          </button>
          <button className="border-2 p-1   rounded-lg border-yellow-200 h-1/2 w-15 bg-orange-300">
            For Business
          </button>
          <button className="bg-red-400 rounded-lg p-1 text-white">
            search
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full h-lvh">
        <div className="w-1/2 flex flex-col gap-5 p-7">
          <h1 className="text-5xl font-bold">
            {" "}
            <span className="text-red-400">Unlock</span> <br /> your Carrer
          </h1>
          <p>
            Explore opportunities from across the globe to learn, showcase
            skills, gain CV points & get hired by your dream company.
          </p>
          <div className="flex gap-5">
            <button className="bg-red-400  rounded-xl h-10 w-1/4 text-center text-white">
              Contact
            </button>
            <p className="bg-purple-300 p-2 rounded-lg h-10 w-2/4 text-center">
              {" "}
              <span className="text-red-400  font-bold *:text-xl">
                Arjun
              </span>{" "}
              Just Went Unstop Pro
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img
            src="/Landing_image.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow-md">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <div class="border-r border-gray-300 last:border-r-0">
            <p class="text-3xl font-bold text-red-500">
              18M<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Active Users</p>
          </div>
          <div class="border-r border-gray-300 last:border-r-0">
            <p class="text-3xl font-bold text-red-500">
              22.3M<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Assessments</p>
          </div>
          <div class="border-r border-gray-300 last:border-r-0">
            <p class="text-3xl font-bold text-red-500">
              130K<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Opportunities</p>
          </div>
          <div class="border-r border-gray-300 last:border-r-0">
            <p class="text-3xl font-bold text-red-500">
              800<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Brands trust us</p>
          </div>
          <div class="border-r border-gray-300 last:border-r-0">
            <p class="text-3xl font-bold text-red-500">
              42K<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Organisations</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-red-500">
              78<span class="text-red-400 text-lg font-medium">+</span>
            </p>
            <p class="text-gray-600 text-sm mt-1">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
