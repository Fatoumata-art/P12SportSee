import Chart4 from "../components/Chart4";
import Chart3 from "../components/Chart3";
import Chart2 from "../components/Chart2";
import Chart from "../components/chart";
import Service from "../service/service";
import Widget from "../components/widget";


function Profil(){

    
    return (
        <main className="main">
           <banner className="user_header">
           <h1>Bonjour </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
           </banner>
           <section className="main_container">
                <div className="charts_container">
                    <div className="chart-bar">
                       
                         <Chart />
    
                    </div>
                    <div className="chart-card">
                        <Chart2 />
                        <Chart3 />
                        <Chart4 /> 
                    </div>               
                </div>
                <aside className="aside_left">
                    <Widget type="Calorie" />
                    <Widget  type="Protéine"  />
                    <Widget  type="Glucide"  />
                    <Widget  type="Lipide" />
                    <Service />
                </aside>
            </section>
        </main>
    )
}

export default Profil