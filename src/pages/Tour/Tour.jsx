import { useState } from "react";
import { UniversitySelector } from "./UniversitySelector";
import Slideshow from "./SlideShow";
import universities from "../../assets/university.json";
import "./Tour.css";

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

  return (
    <div className="tour-page font-boldm antialiased overflow-y-auto">
      <div className="tour-content">
        <div className="flex flex-col border-b border-black/30 font-montserrat text-xl gap-y-1 mb-5 text-black  w-full">
          <h1 className="mx-auto text-2xl font-bold ">
            Lets go on a virtual tour to the various universities
          </h1>
          <h2 className="mx-auto">
            (Follow the link below to watch more videos and know more about your
            preferred university)
          </h2>
        </div>
        <UniversitySelector
          universities={universityList}
          onSelect={handleUniversitySelect}
        />
        <Slideshow images={selectedUniversity.images} interval={5000} />
        <div className="video-link ">
          <a
            href={selectedUniversity.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full btn "
          >
            Watch Campus Tour Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
