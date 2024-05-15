import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";

function ListPage({ items }) {

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        {items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={items} />
    </div>
  </div>;
}

export default ListPage;
