import React from "react";

const StoriesCard = ({ title, description, author }) => {
  return (
    <div
      className={`row-span-1 flex flex-col gap-3 justify-self-stretch  border hover:border-[#999] transition-all rounded-lg p-5`}
    >
      <h4 className={`font-medium text-[18px]`}>{title}</h4>
      <p className={`font-light`}>{description}</p>
      <p className={`font-light text-[#DADADA]`}>{author}</p>
      <div className={`mt-auto`}>
        <a href="#" className={`font-light`}>
          Read Case Study
        </a>
      </div>
    </div>
  );
};
export default StoriesCard;
