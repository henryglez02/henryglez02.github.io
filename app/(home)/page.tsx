import React from "react";
import Image from "next/image";

import me from "../../assets/images/avatar.jpg";

const HomePage = () => {
  return (
    <main className="flex flex-col animate-fade-in-y m-9 mt-6  lg:my-12 lg:w-full  ">
      <h1 className="font-bold  text-slate-200 text-5xl py-4">Hi!👋</h1>

      <p className=" text-sm mb-1 ">
        <span className=" font-semibold text-slate-200 text-base mr-2">
          I'm Henry
        </span>
        and this is my profile...
      </p>

      <div className="flex lg:flex-row gap-6 items-center justify-center my-5 lg:my-6">
        <Image
          className="  rounded-full h-52 w-52 object-cover object-center  lg:h-60 lg:w-60"
          src={me}
          alt="Picture of the author"
          quality={100}
          priority
        />

        <div className="flex flex-col items-center gap-4 justify-center ">
          <a
            className="  text-slate-200 hover:text-teal-300"
            href="https://github.com/henryglez02"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 64 64"
              className="fill-current"
            >
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
          </a>

          <a
            className=" text-slate-200 hover:text-teal-300  "
            href="https://t.me/henryglez02"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              className="fill-current"
            >
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
          <a
            className=" text-slate-200 hover:text-teal-300"
            href="mailto:henryglez02@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="38"
              height="38"
              viewBox="0 0 64 64"
              className="fill-current"
            >
              <path d="M55,10H9c-2.209,0-4,1.791-4,4v34c0,2.209,1.791,4,4,4h46c2.209,0,4-1.791,4-4V14C59,11.791,57.209,10,55,10z M55,45.738 C54.954,47,53.901,48,52.618,48H49.5L51,21L32,33L13,22l1.5,26h-3.118C10.099,48,9.046,47,9,45.738V16.289 c0-1.25,1.03-2.263,2.3-2.263h1.2L32,29l19.5-14.974h1.2c1.27,0,2.3,1.013,2.3,2.263V45.738z"></path>
            </svg>
          </a>
        </div>
      </div>
      <section className="pt-4  text-sm ">
        <p className="leading-8">
          I am passionate about{" "}
          <span className="font-semibold text-slate-200">
            creating innovative
          </span>{" "}
          and{" "}
          <span className="font-semibold text-slate-200">
            quality solutions
          </span>
          , using technologies such as React, Next.js, Flutter and others. I
          consider myself a{" "}
          <span className="font-semibold text-slate-200">
            proactive, creative person
          </span>{" "}
          with the ability to work as a team and adapt to the needs of each{" "}
          <span className="font-semibold text-slate-200">project</span>.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
