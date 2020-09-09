import React, { Component } from 'react';
import TeamCard from './teamCard'

class Team extends Component {
  state = {  }
  render() { 
    return ( 

      <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>
                    {   
                    [
                      { "name" :"Dr. Abhay Kumar Agarwal",
                        "title" :"Assistant Professor CSE KNIT",
                        "year" : "2000 - present",
                        "image" : "https://anprimages.blob.core.windows.net/general-images/Abhay Sir.jpg"
                      },
                      { "name" : "Puneet Kumar",
                        "title" : "Information Technology",
                        "year" : "2016-2020",
                        "image" : "https://anprimages.blob.core.windows.net/general-images/photo.jpg"
                      },
                      { "name" : "Vivek Rai",
                        "title" : "Information Technology",
                        "year" : "2016-2020",
                        "image" : "https://anprimages.blob.core.windows.net/general-images/vivek.jpeg"
                      },
                      { "name" : "Shubham Ahlawat",
                        "title" : "Information Technology",
                        "year" : "2016-2020",
                        "image" : "https://anprimages.blob.core.windows.net/general-images/ahlawat.jpg"
                      }
                    
                    ].map((data, idx) => (
                    <TeamCard
                        key = {idx}
                        name = {data.name }
                        title = {data.title }
                        year = {data.year }
                        image = {data.image}
                    >

                    </TeamCard>))}
                </div>

     );
  }
}
 
export default Team;