
import './country.css'
const Country = ({country}) => {
    console.log(country)
    const {name,flags,area,population}=country;
    return (
        <div className="country">
           <h1>Country name : {name.common}</h1>
           <img src={flags
.png} alt=""  /> 
<p>area : {area}</p>
<p>population : {population}</p>
        </div>
    );
};

export default Country;