import React, { useState } from "react";
import FeatureBox from "./FeatureBox";
const Features = () => {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section className="pb-[100px] md:pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-[50px] md:gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
