import home from "../assets/home.svg";
import h1 from "../assets/h1.svg";
import Refer from "./Referal";
import Benifits from "./Benifits";
import Footer from "./Footer";
import React, { useState } from "react";
import ReferInput from "./ReferInput";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <div className="bg-custom-back flex  ml-28 mt-4 w-10/12 ">
        <div className="ml-28 space-y-8">
          <h1
            className="mt-4"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "49px",
            }}
          >
            Lets&apos;s Learn <br />& Earn
          </h1>
          <p
            className=""
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
            }}
          >
            Get a chance to win <br />
            up-to <span className="text-blue-700 text-4xl">Rs 15,000</span>{" "}
          </p>
          <button className="" onClick={toggleFormVisibility}>
            Refer Now
          </button>
          {showForm && <ReferInput />}
        </div>
        <img className="h-96 ml-28" src={home} alt="d" />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute top-60 -z-1 h-20 "
        />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute ml-custum -z-1 h-20 "
        />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute right-24 -z-1 h-20 "
        />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute left-3/4 top-3/4 rotate-12 -z-1 h-20 "
        />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute top-3/4 ml-custm rotate-90 -z-1 h-20 "
        />
        <img
          src={h1}
          alt="k"
          id="img1"
          className="absolute ml-custum -z-1 h-20 "
        />
      </div>

      <Refer />
      <Benifits />
      <Footer />
    </>
  );
};

export default Home;
