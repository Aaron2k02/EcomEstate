import {Link, useLocation} from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  const renderIcon = () => {
    if (currentUrl.includes("/profile")) {
      return <div className="icons">
        <div className="icon">
            <Link to={`/${item.id}/edit`}>
                <img src="/Edit.jpg" alt=""/>
            </Link>
        </div>
      </div>;
    }
    return <div className="icons">
      <div className="icon">
        <img src="/save.png" alt=""/>
      </div>
      <div className="icon">
        <img src="/chat.png" alt=""/>
      </div>
    </div>;
  };

  return (
      <div className="card">
        <Link to={`/${item.id}`} className="imageContainer">
          <img src={item.img} alt=""/>
        </Link>
        <div className="textContainer">
          <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          {renderIcon()}
        </div>
      </div>
    </div>
  );
}

export default Card;
