import { useState } from 'react';
import UniversitySelector from '../../components/UniversitySelector';
import Slideshow from '../../components/Slideshow';
import universities from '../../assets/universities.json';
import './TourPage.css';

const TourPage = () => {
  const [selectedUniversity, setSelectedUniversity] = useState({
    images: universities.knust.images,
    videoUrl: universities.knust.videoUrl
  });

  const handleUniversitySelect = (university) => {
    setSelectedUniversity({
      images: university.images,
      videoUrl: university.videoUrl
    });
  };

  const universityList = [
    { name: 'KNUST', images: universities.knust.images, videoUrl: universities.knust.videoUrl },
    { name: 'Legon', images: universities.legon.images, videoUrl: universities.legon.videoUrl },
    { name: 'UCC', images: universities.ucc.images, videoUrl: universities.ucc.videoUrl },
    { name: 'More', images: universities.more.images, videoUrl: universities.more.videoUrl }
  ];

  return (
    <div className="tour-page">
      <div className="tour-content">
        <h1>Lets go on a virtual tour to the various universities</h1>
        <h2>(Follow the link below to watch more videos and know more about your preferred university)</h2>
        <UniversitySelector universities={universityList} onSelect={handleUniversitySelect} />
        <Slideshow images={selectedUniversity.images} interval={5000} />
        <div className="video-link">
          <a href={selectedUniversity.videoUrl} target="_blank" rel="noopener noreferrer">
            Watch Campus Tour Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
