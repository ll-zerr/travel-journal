export default function Entry(props) {
    return (
        <article className="journal-entry">
            <figure>
                <a href={props.img.link}>
                <img 
                    src={props.img.src}
                    alt={props.img.alt}
                    className="location-image"/>
                </a>
            </figure>
            
            <div className="info-container">
                <div className="location">
                    <img 
                    src="./src/assets/marker.png"
                    alt="marker icon"
                    className="marker-icon"/>
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink} className="location-maps">View on Google Maps</a>
                </div>
                <h2 className="tourist-spot">{props.title}</h2>
                <p className="dates">{props.dates}</p>
                <p className="information">{props.text}</p>
            </div>
        </article>
    )
}