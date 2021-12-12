import React from "react";
import Footer from "../../component/footer/footer";
import Heropage from "../../component/heropage/heropage";
import Navbar from "../../component/navbar";
import Sectionone from "../../component/sectionone/sectionone";
import Sectiontwo from "../../component/sectiontwo/sectiontwo";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Sectionone />
      <Sectiontwo />
      <Footer />
    </div>
  );
};

export default Landingpage;
