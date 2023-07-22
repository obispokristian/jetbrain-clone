const AudienceCard = ({ src, title, description }) => {
  return (
    <div className="">
      <div className="md:w-[260px] w-[100%] flex flex-col gap-3 cursor-pointer text-[#CDCDCD] hover:text-white">
        <div className={`flex gap-2 items-center max-w-max horizontal`}>
          <img src={src} alt="" className={`w-[25px]`} />
          <h6 className={`font-medium text-[16px]`}>{title}</h6>
        </div>
        <p className={`text-[16px]`}>{description}</p>
      </div>
    </div>
  );
};
export default AudienceCard;
