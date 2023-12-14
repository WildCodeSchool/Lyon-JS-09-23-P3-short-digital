import PropTypes from "prop-types";

function Videos({ src }) {
  return (
    <div>
      <video controls src={src}>
        <track default kind="captions" src=".../assets/quenouilles.fr.vtt" />
      </video>
    </div>
  );
}

Videos.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Videos;
