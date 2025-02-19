import React from "react";

const StayProductive = () => {
  return (
    <section className="pb-[100px] md:pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div className="">
          <img
            src="/images/illustration-stay-productive.png"
            alt="stay productive img"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              earum omnis eum quisquam. Error ex, molestiae quaerat aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cupiditate unde! Qui quod velit accusamus sed consectetur delectus.
            </p>
          </div>
          <a href="/" className=" text-primaryColor hover:text-[#42b0d1] border-b-2 border-primaryColor border-solid pb-[5px] flex items-center gap-2 w-fit transition-colors duration-200">See how Fylo works
            <img src="/images/icon-arrow.svg" alt="arrow image" className="animate-[moveRight_1s_ease-in-out_infinite] w-[20px] h-[20px] object-contain"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
