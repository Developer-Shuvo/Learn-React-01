const DaisyNav = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-black shadow-sm w-full fixed top-0 left-0 z-50">
        <div className="max-w-[1320px] mx-auto w-full flex justify-between items-center px-4">
          {/* Left - Start */}
          <div className="navbar-start">
            <div className="dropdown hover:border-2 hover:border-red-600 hover:bg-green-600 bg-blue-900 rounded-full">
              <div tabIndex={0} role="button" className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black border border-gray-600 rounded-md text-white font-semibold z-1 mt-3 w-32 p-2 py-6 shadow text-lg"
              >
                <li className="hover:text-lime-400">
                  <a>Homepage</a>
                </li>
                <li className="hover:text-lime-400">
                  <a>Portfolio</a>
                </li>
                <li className="hover:text-lime-400">
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle - Center */}
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl text-white">Learn React</a>
          </div>

          {/* Right - End */}
          <div className="navbar-end space-x-2">
            {/* search */}
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* Notifications */}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaisyNav;
