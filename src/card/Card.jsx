import "./Card.css";

function Card(objectProp) {
  return (
    <div className="card">
      <div className="container">
        <h1>{objectProp.props.API}</h1>
        <p>{objectProp.props.Category}</p>
        <a href={objectProp.props.Link}>{objectProp.props.Description}</a>
      </div>
    </div>
  );
}

export default Card;

// "API":"Cat Facts",
// "Description":"Daily cat facts",
// "Auth":"",
// "HTTPS":true,
// "Cors":"no",
// "Link":"https://alexwohlbruck.github.io/cat-facts/",
// "Category":"Animals"
