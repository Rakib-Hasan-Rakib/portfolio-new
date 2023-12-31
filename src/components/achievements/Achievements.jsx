import certificateImg from "../../assets/images/certificate-of-frontend.png";

const Achievements = () => {
  return (
    <>
      <div className="section-title text-6xl lg:text-8xl uppercase font-bold pt-12">
        <h1>Info</h1>
        <h1>Info</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <img
          src={certificateImg}
          alt="certificate of frontend development"
          className="w-full lg:w-1/2"
        />
      </div>
    </>
  );
};
export default Achievements;
