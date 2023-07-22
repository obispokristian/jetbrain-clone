import { stories } from "../../data.js";
import StoriesCard from "../components/StoriesCard.jsx";

const Stories = () => {
  return (
    <div className={`w-full bg-white`}>
      <div className={`max-w-[1200px] w-[90%] mx-auto`}>
        {/* header */}
        <div className={`flex flex-col gap-4 max-w-[600px]`}>
          <h2 className={`font-medium text-[32px]`}>Customer Stories</h2>
          <p className={`text-[16px] md:text-[24px] font-light`}>
            See how the world's leading companies use JetBrains products
          </p>
        </div>
        <div
          className={`cursor-pointer my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 justify-items-center`}
        >
          {stories.map((item) => {
            return (
              <StoriesCard
                key={item.index}
                description={item.description}
                title={item.title}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Stories;
