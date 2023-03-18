import "./Card.css";

function Card(objectProp) {
//   console.log(objectProp.props.API);
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{objectProp.props.API}</b>
        </h4>
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
