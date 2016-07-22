import React from 'react';

const Results = props=>
    <div>
{/* NO CONDITIONAL NEEDED  */}
<h1>{props.countryData.name}</h1>
  <h2><strong>Advisory Level :</strong> {props.countryData.advisoryState}</h2>
    <h3><em>{props.countryData.advisoryText}</em></h3>
{/*  EMBASSY*/ }
    <p><strong>Embassy Location :</strong> {props.countryData.offices[0].address}</p>

    <div>
    <h2><strong>Current Health Risks :</strong></h2>
    <p>{props.countryData.health.description}</p>
    </div>

    <div>
    <h2><strong>Climate Risks :</strong></h2>
    <p>{props.countryData.climate.description}</p>
    </div>

    <div>
    <h2><strong>Current Safety Issues: {props.countryData.safety.safetyInfo[0].category}</strong></h2>
      <p>{props.countryData.safety.safetyInfo[0].description}</p>
    </div>

    <div>
    <h2><strong>Current Cultural Issues: {props.countryData.lawAndCulture.lawAndCultureInfo[0].category}</strong></h2>
      <p>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</p>
    </div>


 {/*

  <p><strong>Climate Risks :</strong> {props.countryData.climate.climateInfo[0].description}</p>*/}
      {/*This works for TO*/}
{/*





{/*   LAW AND CULTURE
    <li><strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].category} : </strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</li>
  */}




{/*  3  REGIONAL ADVISORIES
    <p><strong>Regional Advisories :</strong>{props.countryData.advisories.regionalAdvisories[0].category}</p>
    <p>details: {props.countryData.advisories.regionalAdvisories[0].description} </p>
 */}







    </div>

export default Results;
