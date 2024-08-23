const Map = ({ value }) => {
  const changedValue = value.split(" ").join("+");
  return (
    <div className="h-56 w-96  p-1 border border-white/15 bg-graySecondary rounded-lg ">
      <iframe
        className="rounded-lg"
        width="100%"
        height="100%"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.VITE_GOOGLE_KEY
        }&q=${changedValue}`}
      ></iframe>
    </div>
  );
};

export default Map;
