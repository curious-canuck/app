import React from 'react';

export default function Results(props){
  return (
    <div>
      <h1>{props.countryData.name}</h1>
      <div className="advisory">
        <h2><strong>Advisory Level :</strong> {props.countryData.advisoryState}</h2>
        <h3><em>{props.countryData.advisoryText}</em></h3>
      </div>

      {/* EMBASSY */ }
      <div className="embassy">
        <p><strong>Embassy Location :</strong> {props.countryData.offices[0].address}</p>
      </div>

      {/* HEALTH */}
      <div className="health">
      <h2>Current Health Risks :</h2>
      <p>{props.countryData.health.description}</p>
      </div>

      {/* CLIMATE */}
      <div className="climate">
      <h2>Climate Risks :</h2>
      <p>{props.countryData.climate.description}</p>
      </div>

      {/* SAFETY */}
      <div className="safety">
      <h2>Current Safety Issues: {props.countryData.safety.safetyInfo[0].category}</h2>
        <p>{props.countryData.safety.safetyInfo[0].description}</p>
      </div>

      {/* CULTURE ISSUES */}
      <div className="culture">
      <h2><strong>Current Cultural Issues: {props.countryData.lawAndCulture.lawAndCultureInfo[0].category}</strong></h2>
        <p>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</p>
      </div>
    </div>

  )


}

/* NO CONDITIONAL NEEDED  */
  {/* <p><strong>Climate Risks :</strong> {props.countryData.climate.climateInfo[0].description}</p>*/}
    {/*This works for TO*/}
  {/* LAW AND CULTURE
    <li><strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].category} : </strong>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</li>
  */}
  {/*  3  REGIONAL ADVISORIES
    <p><strong>Regional Advisories :</strong>{props.countryData.advisories.regionalAdvisories[0].category}</p>
    <p>details: {props.countryData.advisories.regionalAdvisories[0].description} </p>
  */}
