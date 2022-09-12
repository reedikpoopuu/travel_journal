
export default function Card (props) {
    return(
        <div className="card">
                <img src={props.item.pic} alt="location picture" className="card--locationImage"></img>
                <div className="card--location">
                    <div className="card--locationInfo">
                        <img src={require("../images/location-dot-solid.png")} alt="location logo" className="card--locationLogo"></img>
                        <p className="card--locationName">{props.item.location}</p>
                        <a href={props.item.location_map} className="card--locationLink">View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.item.title}</h1>
                    <h3 className="card--period">{props.item.start_date} - {props.item.end_date}</h3>
                    <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}