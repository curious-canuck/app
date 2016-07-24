import React from 'react';

export default function Results(props){
  return (
    <div className="col-md-12 bordered">
      <div className="text-center">
        <h2>{props.countryData.name}</h2>
      </div>
      <div className="row">
        <div className="advisory col-md-5">
          <h3><em>{props.countryData.advisoryText}</em></h3>
          <div className="col-md-4 text-center">
            <h2>{props.countryData.advisoryState}</h2>
          </div>
      </div>

          {/* EMBASSY */ }
          <div className="embassy col-md-3">
            <p><strong>Embassy Location :</strong> {props.countryData.offices[0].address}</p>
          </div>

          {/* HEALTH */}
          <div className="health col-md-8">
            <h3>Current Health Risks :</h3>
            <p>{props.countryData.health.description}</p>
          </div>

          {/* CLIMATE */}
          <div className="climate col-md-4">
            <h3>Climate Risks :</h3>
            <p>{props.countryData.climate.description}</p>
          </div>

          {/* SAFETY */}
          <div className="safety col-md-4">
            <h3>Current Safety Issues: {props.countryData.safety.safetyInfo[0].category}</h3>
            <p>{props.countryData.safety.safetyInfo[0].description}</p>
          </div>

          {/* CULTURE ISSUES */}
          <div className="culture col-md-4">
            <h3><strong>Current Cultural Issues: {props.countryData.lawAndCulture.lawAndCultureInfo[0].category}</strong></h3>
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
