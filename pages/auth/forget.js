import Layout from "../../components/layout";
export default function forget() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
          <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
            <h1 className="text-4xl font-semibold ">Need Help To Get Back?</h1>
          </div>
          <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
            <input
              className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="email"
              placeholder="Email"
            />
            <div className="flex items-center">
              <button
                className="block w-full bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                type="submit"
              >
                Send Recovery Mail
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
