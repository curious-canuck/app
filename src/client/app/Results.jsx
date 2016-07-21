import React from 'react';

const Results = props=>
    <div>
{/*          */}
<h1>{props.countryData.name}</h1>
<h2><strong>Advisory Level :</strong> {props.countryData.advisoryState}</h2>
<h3><em>{props.countryData.advisoryText}</em></h3>


    <p><strong>Climate Risks :</strong> {props.countryData.climate.description}</p>



{
  <ul>

    <li><strong>Current Health Risks : </strong>{props.countryData.health.description}</li>




    <li><strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].category} : </strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</li>





    <li><strong>Regional Advisories :</strong>{props.countryData.advisories.regionalAdvisories[0].category}</li>
    <li>details: {props.countryData.advisories.regionalAdvisories[0].description} </li>






    <li><strong>Embassy Location :</strong> {props.countryData.offices[0].address}</li>
  </ul>
  }
    </div>

export default Results;
