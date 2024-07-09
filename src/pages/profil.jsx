import React, { useState, useEffect } from 'react'
import Score from "../components/charts/scoreChart";
import Performance from "../components/charts/performanceChart";
import Session from "../components/charts/sessionChart";
import Activity from "../components/charts/activtyChart";
import Widget from "../components/widget";
import fetchUserData from "./../service/api"
import { useParams, Navigate  } from "react-router-dom";
import fireIcon from "../assets/fire.svg";
import chickenIcon from "../assets/chicken.svg";
import cheeseburgerIcon from "../assets/cheeseburger.svg";
import appleIcon from "../assets/apple.svg"


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
    
    if (resData && !resData.length)
        return <Navigate to="/notFound"/> 


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

           <h1>Bonjour <span className='user-name'>{userData?.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
           </div>
           <section className="main_container">
                <div className="charts_container">
                    <div className="chart-bar">
                       
                        <Activity data={dataChartActivity} />
    
                    </div>
                    <div className="chart-card">
                        <Session data={dataChartSessions} />
                        <Performance data={transformedData} />
                        <Score score={userData?.score*100}/> 
                    </div>               
                </div>
                <aside className="aside_left">
                    <Widget type="Calorie" number={userData?.keyData.calorieCount+"g"} icon={fireIcon}/>
                    <Widget  type="Protéine" number={userData?.keyData.proteinCount+"g"} icon={chickenIcon}/>
                    <Widget  type="Glucide" number={userData?.keyData.carbohydrateCount+"g"} icon={appleIcon} />
                    <Widget  type="Lipide" number={userData?.keyData.lipidCount+"g"} icon={cheeseburgerIcon}/>
                   
                </aside>
            </section>
        </main>
    )
}

export default Profil