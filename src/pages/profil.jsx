import React, { useState, useEffect } from 'react'
import Chart4 from "../components/charts/Chart4";
import Chart3 from "../components/charts/Chart3";
import Chart2 from "../components/charts/Chart2";
import Chart from "../components/charts/chart";
import Widget from "../components/widget";
import fetchUserData from "./../service/api"
import { useParams } from "react-router-dom";
import fireIcon from "./../assets/fire.svg"


console.log()
function Profil(){
    const [backEndData, setbackEndData] = useState([]);
    const { id } = useParams()
  
    useEffect(() => {
        // Je recupère les données avec fetchUserData() 
        // et je remplie directement setBackendData(() => data)
        fetchUserData()
        .then( (data) =>
         setbackEndData(() => data)
        
        )
        .catch((error) => console.log(error))
      },[])
      
    const resData = backEndData.data?.filter((data) => data.id == id);
    
    const userData = resData && resData.length ? resData[0] : null;
    

     //feching user activity data dynamically
     const resActivity = backEndData.activity?.filter((data) => data.userId == id);
     const userActivity = resActivity && resActivity.length ? resActivity[0] : null;
    // console.log("activities", userActivity)
   const dataChartActivity = userActivity?.sessions.map((session, index) => {
    return {
        name: index + 1,
        uv: session.calories,
        pv: session.kilogram
    };
   })
   
    //feching user session 
    const resSessions = backEndData.sessions?.filter((session) => session.userId = id)
    const userSessions = resSessions && resSessions.length ? resSessions[0] : null;
    const dataChartSessions = userSessions?.sessions.map((session) => {
        return {
           
            pv: session.sessionLength,
            name: session.day
        }
    })
    

  //feching user performance 
    const resPerformance = backEndData.performance?.filter((element) => element.userId = id)

    console.log("performance",resPerformance)
    const userPerformance = resPerformance && resPerformance.length ? resPerformance[0] : null;

    console.log("resPerfom", resPerformance)
        console.log("userPerfom", userPerformance)
        const transformedData = userPerformance?.data.map((item) => {
            
            return {
              subject: userPerformance.kind[item.kind],
              A: item.kind,
              B: item.value
            };
          });
        
      

    
    
    return (
        <main className="main">
           <div className="user_header">

           <h1>Bonjour {userData?.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
           </div>
           <section className="main_container">
                <div className="charts_container">
                    <div className="chart-bar">
                       
                        <Chart data={dataChartActivity} />
    
                    </div>
                    <div className="chart-card">
                        <Chart2 data={dataChartSessions} />
                        <Chart3 data={transformedData} />
                        <Chart4 score={userData?.score*100}/> 
                    </div>               
                </div>
                <aside className="aside_left">
                    <Widget type="Calorie" number={userData?.keyData.calorieCount+"g"} icon={fireIcon}/>
                    <Widget  type="Protéine" number={userData?.keyData.proteinCount+"g"} />
                    <Widget  type="Glucide" number={userData?.keyData.carbohydrateCount+"g"} />
                    <Widget  type="Lipide" number={userData?.keyData.lipidCount+"g"}/>
                   
                </aside>
            </section>
        </main>
    )
}

export default Profil