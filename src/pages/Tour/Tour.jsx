import { useState } from "react";
import { UniversitySelector } from "./UniversitySelector";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Slideshow from "./SlideShow";
import universities from "./../../assets/universities.json";
import tour from "./tour.module.css";

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
    <div className="w-full overflow-y-auto h-screen font-boldm text-black  bg-mainbackground px-9">
      <div className="text-3xl text-white flex flex-col mx-auto border-b border-white/15 mb-9">
        <span className="mx-auto">A Tour of Schools in Ghana</span>
        <span className="mx-auto">
          Below are some videos of schools in Ghana
        </span>
      </div>
      <UniversitySelector
        universities={universityList}
        onSelect={handleUniversitySelect}
      />
      <SimpleSlider images={selectedUniversity.images} />
      <div className="mx-auto w-32 border border-black rounded-lg">
        <a
          href={selectedUniversity.videoUrl}
          className="btn w-full bg-primary/15 rounded-lg"
        >
          hello
        </a>
      </div>
    </div>
  );
};

export default TourPage;
