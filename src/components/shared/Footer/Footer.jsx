import React from "react";

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            <div>
              <span className="block h-10 w-32 rounded-lg bg-gray-700"></span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Get the latest Service
                  </h2>

                  <p className="mt-6 text-gray-400">
                    We are trying to improve ourselves day by day.Please put you
                    suggestion if any.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full text-white">
                  <label for="email" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="border border-white/10 p-2 sm:flex sm:items-center">
                    <input
                      className="h-12 w-full border-none bg-transparent p-3 text-sm font-medium uppercase tracking-widest placeholder-gray-400"
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />

                    <button
                      className="mt-1 h-12 w-full bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
                <p className="font-bold text-white">Services</p>

                <nav
                  aria-label="Footer Nav"
                  className="mt-6 flex flex-col space-y-4 text-sm text-gray-300"
                >
                  <a className="inline-block" href="">
                    Best Qualiy
                  </a>
                  <a className="inline-block" href="">
                    Home made feelings
                  </a>
                  <a className="inline-block" href="">
                    Unique Taste Experience
                  </a>
                </nav>
              </div>

              <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
                <p className="font-bold text-white">Company</p>

                <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                  <a className="inline-block" href="">
                    {" "}
                    About{" "}
                  </a>

                  <a className="inline-block" href="">
                    {" "}
                    History{" "}
                  </a>
                  <a className="inline-block" href="">
                    {" "}
                    Careers{" "}
                  </a>
                </nav>
              </div>

              <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
                <p className="font-bold text-white">Helpful Links</p>

                <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                  <a className="inline-block" href="">
                    {" "}
                    Contact{" "}
                  </a>
                  <a className="inline-block" href="">
                    {" "}
                    FAQs{" "}
                  </a>
                  <a className="inline-block" href="">
                    {" "}
                    Live Chat{" "}
                  </a>
                </nav>
              </div>

              <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
                <p className="font-bold text-white">Legal</p>

                <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                  <a className="inline-block" href="">
                    {" "}
                    Accessibility{" "}
                  </a>
                  <a className="inline-block" href="">
                    {" "}
                    Returns Policy{" "}
                  </a>
                  <a className="inline-block" href="">
                    {" "}
                    Refund Policy{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <p className="text-center text-xs text-gray-400 lg:text-left">
                Copyright © 2022 - All right reserved by{" "}
                <strong>Bengle Dish</strong>
              </p>

              <nav className="flex justify-center gap-4 text-xs text-gray-400 lg:justify-end">
                <a href=""> Terms & Conditions </a>
                <a href=""> Privacy Policy </a>
                <a href=""> Cookies </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
