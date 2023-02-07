function Card(){
  return(
    <div className="card-container">
      <img className="card-image"/>

      <div>
        <div className="card-location">
          <img className="location-logo"/>
          <p className="card--country"></p>
          <a><p className="card--map">View on Google Maps</p></a>
        </div>
        <h1 className="location-name"></h1>
        <p className="location-date"></p>
        <p className="location-description"></p>
      </div>
     
    </div>
  )
}

export default Card;