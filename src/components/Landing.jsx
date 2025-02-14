import React from "react";

const Landing = () => {
  return (
    <section className="bg-[#1C2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="landing-img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-8 md:mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, eos eveniet voluptatibus laudantium fuga quasi
              consectetur magni a nam iure ratione tempore beatae eaque et
              labore magnam aperiam sequi eligendi.
            </p>
          </div>
          <a href="/" className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium">Get Started</a>
        </div>
      </div>
      <div className="w-full h-[200px]">
      <picture>
        <source srcSet="/src/assets/images/bg-curvy-desktop.svg" media="(min-width: 1024px)"/>
        <source srcSet="/src/assets/images/bg-curvy-mobile.svg" media="(min-width: 768px)"/>
        <img src="/src/assets/images/bg-curvy-mobile.svg" alt="curvy-desktop" className="w-full h-full"/>
      </picture>
      </div>
    </section>
  );
};

export default Landing;
