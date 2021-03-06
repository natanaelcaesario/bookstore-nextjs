import Layout from "../../components/layout";
import Link from "next/Link";
export default function login() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
          <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
            <h1 className="text-4xl font-semibold ">Welcome back.</h1>
          </div>
          <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
            <input
              className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="text"
              placeholder="Email"
            />
            <input
              className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="text"
              placeholder="Password"
            />
            <div className="flex items-center">
              <div className="w-1/2 flex items-center">
                <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                <label htmlFor="remember-me">Remember me!</label>
              </div>
              <button
                className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
            <Link href="forget">
              <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer">
                Forgot your password?
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
