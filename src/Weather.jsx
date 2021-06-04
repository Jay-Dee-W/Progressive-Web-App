import './Weather.css'

export default function Weather({ data }) {
    const { location, current } = data
    function getAirIcon(index) {
        switch (index) {
            case (1):
                return '😁';
            case (2):
                return '😊';
            case (3):
                return '😐';
            case (4):
                return '😷';
            case (5):
                return '🤢';
            case (6):
                return '💀';
            default:
                break;
        }
    }
    return (
        <div className='weather'>
            <h2>{location.name}, {location.country}</h2>
            <p className='temp'>
                Temperature: {current.temp_c}
                <img className='icon' src={`https:${data.current.condition.icon}`} alt='icon' />
            </p>
            <p>Air Quality Index: {current.air_quality.pm10} {getAirIcon(data.current.air_quality['us-epa-index'])}</p>
            
            
        </div>
    )
}