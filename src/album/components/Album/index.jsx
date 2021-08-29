import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumdnai">
        <img src={album.thumbnaiUrl} alt={album.title} />
      </div>
      <p className="album__title">{album.title}</p>
    </div>
    
  );
}

export default Album;