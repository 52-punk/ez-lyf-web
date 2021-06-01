import "./Card.css";

function Card(props) {
  return (
    <div className="card-container" onClick={props.showItem}>
      {props.children}
    </div>
  );
}

export default Card;
