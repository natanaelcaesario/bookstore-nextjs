import Navbar from "./navbar";
import Footer from "./footer";
function layout(props) {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
      Hello World
    </div>
  );
}

export default layout;
