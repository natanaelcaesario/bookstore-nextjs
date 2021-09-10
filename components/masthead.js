import Vektor from "../public/images/person.svg";
import Image from "next/image";
function masthead() {
  return (
    <>
      <div className="container px-10 py-10 lg:px-0 lg:py-10 border-b">
        <div className="lg:flex ">
          <div className="lg:relative left-20 top-2">
            <h1 className="mb-3">Happy Read A Book Day </h1>
            <p className="mb-5">
              asd National Read a Book Day on September 6 calls all book lovers
              to indulge in their favorite hobby, guilt-free. asdasdsad
              asdasdasd Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Assumenda cupidita lorem10
            </p>
            <div className="mb-10 bg-red-500 text-white items-center rounded font-bold py-2 px-6 w-2/4 text-center">
              <button className="">Explore More</button>
            </div>
          </div>
          <div className="lg:relative right-28 top-28">
            <Image src={Vektor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default masthead;
