import globe from "../assets/globe-white.png"

function Navbar(){
  return(
    <div>      
      <div  className="Navbar"> 
        <img className="Nav-logo" src={globe}/>
        <p className="Nav-text">My Travel Journal</p>
      </div>
    </div>
  )
}

export default Navbar;