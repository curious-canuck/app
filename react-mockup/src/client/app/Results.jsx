import React from 'react';

export default function Results(props){
  return (
    <div className="col-md-12 bordered">
      <div className="text-center">
        <h2>{props.countryData.name}</h2>
      </div>
      <div className="row">
        {/* HEALTH */}
        <div className="health col-md-4">
          <h3>Current Health Risks :</h3>
          <p>{props.countryData.health.description}</p>
        </div>
        <div className="advisory col-md-4">
          <h3>Advisory</h3>
          <p><em>{props.countryData.advisoryText}</em></p>
          <h2>{props.countryData.advisoryState}<em>/3</em></h2>
          {/* EMBASSY */ }
          <p><strong>Embassy Location :</strong> {props.countryData.offices[0].address}</p>
        </div>
        {/* CLIMATE */}
        <div className="climate col-md-4">
          <h3>Climate Risks :</h3>
          <p>{props.countryData.climate.description}</p>
        </div>
      </div>

      <div className="row">
        {/* SAFETY */}
        <div className="safety col-md-6">
          <h3>Current Safety Issues:</h3>
          <h4>{props.countryData.safety.safetyInfo[0].category}</h4>
          <p>{props.countryData.safety.safetyInfo[0].description}</p>
        </div>

        {/* CULTURE ISSUES */}
        <div className="culture col-md-6">
          <h3><strong>Current Cultural Issues:</strong></h3>
          <h4>{props.countryData.lawAndCulture.lawAndCultureInfo[0].category}</h4>
          <p>{props.countryData.lawAndCulture.lawAndCultureInfo[0].description}</p>
        </div>
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
