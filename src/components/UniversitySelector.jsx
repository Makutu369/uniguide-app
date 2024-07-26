import PropTypes from 'prop-types';
import './UniversitySelector.css';

const UniversitySelector = ({ universities, onSelect }) => {
  return (
    <div className="university-selector">
      {universities.map((university, index) => (
        <button key={index} onClick={() => onSelect(university)}>
          {university.name}
        </button>
      ))}
    </div>
  );
};

UniversitySelector.propTypes = {
  universities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      videoUrl: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default UniversitySelector;
