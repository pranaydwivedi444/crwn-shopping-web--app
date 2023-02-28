import "./directory-item.styles.scss";
import { Link, useNavigate } from "react-router-dom";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  function onNavigateHandler() {
    navigate(route);
  }
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
