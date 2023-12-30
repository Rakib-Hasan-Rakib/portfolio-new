import { MdOutlineWatchLater } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import "./project.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const [loved, setLoved] = useState(false);
  const { name, image, status, description,code,url } = project;
  const handleClick = () => {
    setLoved(true);
    toast(`Thanks for loving ${name}`, {
      icon: "👏",
    });
  };

  return (
    <>
      <div className="project relative flex flex-col justify-between w-full h-full text-white p-2 space-y-2 rounded-lg">
        <div className="space-y-2 ">
          <img
            src={image}
            alt="project image"
            className="full rounded-lg h-60 object-cover object-center"
          />
          <div
            onClick={handleClick}
            className="heart-icon absolute right-4 top-52 p-4 rounded-full text-red-600 cursor-pointer"
          >
            {loved ? <IoMdHeart size={28} /> : <IoMdHeartEmpty size={28} />}
          </div>

          {status == "completed" ? (
            <div className="flex gap-2 items-center text-green-500">
              <IoCheckmarkDoneCircleOutline size={24} className="" />
              <p>{status}</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center text-yellow-300">
              <MdOutlineWatchLater size={24} className="" />
              <p>{status}</p>
            </div>
          )}

          <h2 className="text-white text-2xl font-semibold">{name}</h2>
          <p className="text-justify">{description}</p>
        </div>
        <div className="flex justify-center items-center gap-5 py-2 ">
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferer"
            className="project-btn px-4 py-2 rounded-lg font-semibold text-md capitalize"
          >
           visit site
          </Link>
          <Link
            to={code}
            target="_blank"
            rel="noopener noreferer"
            className="project-btn px-4 py-2 rounded-lg font-semibold text-md capitalize"
          >
            View code
          </Link>
        </div>
      </div>
    </>
  );
};
export default Project;
