import { useState } from "react";
import { UniversitySelector } from "./UniversitySelector";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.svg";
import Slideshow from "./SlideShow";
import universities from "./../../assets/universities.json";
import tour from "./tour.module.css";
import Navbar from "../../components/SignPage/Navbar";

const TourPage = () => {
  const [selectedUniversity, setSelectedUniversity] = useState({
    images: universities.knust.images,
    videoUrl: universities.knust.videoUrl,
  });

  const handleUniversitySelect = (university) => {
    setSelectedUniversity({
      images: university.images,
      videoUrl: university.videoUrl,
    });
  };

  const universityList = [
    {
      name: "KNUST",
      images: universities.knust.images,
      videoUrl: universities.knust.videoUrl,
    },
    {
      name: "Legon",
      images: universities.legon.images,
      videoUrl: universities.legon.videoUrl,
    },
    {
      name: "UCC",
      images: universities.ucc.images,
      videoUrl: universities.ucc.videoUrl,
    },
    {
      name: "More",
      images: universities.more.images,
      videoUrl: universities.more.videoUrl,
    },
  ];
  const SimpleSlider = ({ images }) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Slider {...settings} className="text-7xl text-black mx-auto px-9 mb-9">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[80%] border border-white/20 rounded-lg p-3 bg-graySecondary "
          >
            <img
              src={image}
              alt=""
              className="w-full h-[500px] object- rounded-lg"
            />
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="w-full text-black dark:text-white overflow-y-auto h-screen font-boldm  bg-white  dark:bg-mainbackground ">
      <div className="h-14 border-b flex px-12 items-center border-black/10 dark:border-white/10 w-full">
        {" "}
        <Link to={"/dashboard"} className="flex gap-x-3 no-underline">
          <div className="w-8 h-8 flex items-center justify-normal">
            <img src={logo} alt="" />
          </div>
          <span className=" no-underline font-montserrat text-black dark:text-white self-center text-xl font-bold ">
            uniguide
          </span>
        </Link>
      </div>
      <div className="px-9">
        <div className="text-3xl  flex flex-col mx-auto mb-3 ">
          <span className="mx-auto">A Tour of Schools in Ghana</span>
          <span className="mx-auto">
            Below are some videos of schools in Ghana
          </span>
        </div>

        <SimpleSlider images={selectedUniversity.images} />
        <div className="flex justify-between w-full px-6 text-black dark:text-white  rounded-lg">
          {" "}
          <UniversitySelector
            universities={universityList}
            onSelect={handleUniversitySelect}
          />
          <a
            href={selectedUniversity.videoUrl}
            className="btn bg-primary/15 border-black/10 rounded-full text-black dark:text-white dark:border-white/20"
          >
            Tour Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
