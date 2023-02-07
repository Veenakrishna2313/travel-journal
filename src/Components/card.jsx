import logo from "../assets/location.png";

function Card(props){

 const {title,location,googleMapsUrl,startDate,endDate,description,imageUrl}=props.item;

  return(
    <div>
 <div className="card-container">
      <img src={imageUrl} className="card-image"/>

      <div>
        <div className="card-location">
          <img src={logo} className="location-logo"/>
          <p className="card--country">{location}</p>
          <a href={googleMapsUrl}><p className="card--map">View on Google Maps</p></a>
        </div>
        <h1 className="location-name">{title}</h1>
        <p className="location-date">{startDate} - {endDate}</p>
        <p className="location-description">{description}</p>
      </div>
      </div>
      <hr className="horizontal-line"></hr>
    </div>
   
  )
}

export default Card;