import PropTypes from "prop-types";

const UniversitySelector = ({ universities, onSelect }) => {
  return (
    <div className="flex justify-center mb-2 gap-x-4">
      {universities.map((university, index) => (
        <button
          key={index}
          onClick={() => onSelect(university)}
          className="btn rounded-lg bg-primary/50"
        >
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
      videoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export { UniversitySelector };
