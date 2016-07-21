import React from 'react';

const dummyData={

}






export default function Country(props) {
  return(
    <div className="col-md-8 bordered">
      <div className="text-center">
        <h2>Country Name</h2>
      </div>
      <div className="row">
        <div className="col-md-5">
          <h3>Advisories</h3>
          <p>There is no nationwide advisory in effect for Greece. Exercise normal security precautions.</p>
          </div>
          <div className="col-md-4 text-center">
            <h2>0/5</h2>
          </div>
          <div className="col-md-3">
            <h3>Vaccines</h3>
            <ul>
              <li>Dengue Fever</li>
              <li>Meningitis</li>
              <li>Influenza</li>
            </ul>
          </div>
          <div className="col-md-8">
            <h3>Strikes and Demonstrations</h3>
            <p>Strikes and demonstrations in Athens are a common occurrence due to austerity measures imposed by the government. Demonstrations and marches occur largely in the centre of Athens in Syntagma Square and in front of the Parliament building. There is currently a heightened potential for demonstrations due to recent developments in Greece's financial situation and elections scheduled for September 20, 2015. Avoid all public gatherings and stay away from areas where they can occur as they may turn violent without notice. Monitor local media and follow the advice of local authorities. Strikes and demonstrations affecting public health services and transportation, such as trains, buses, taxi, metro, ferries and cruise ships, are usually announced in advance. Road closures may occur at short notice, particularly in Athens. Flights may be disrupted and access to airports and ports may be difficult. Contact your airline to check the status of your flight and allow plenty of time to make your way to the airport.</p>
          </div>
          <div className="col-md-4">
            <h3>Medical Services</h3>
            <p>Medical care is usually adequate but varies widely, and facilities are generally much better on the mainland than on the islands. Medical evacuation to a mainland hospital, which can be very expensive, may be necessary in the event of serious illness or injury. Make sure you have travel health insurance that covers all medical expenses for illness or injury (including hospitalization abroad and medical evacuation).</p>
          </div>
        </div>
      </div>
  )

}
