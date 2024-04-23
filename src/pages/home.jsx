import Card from "../components/card"
import { Chart } from "react-google-charts";
import Widget from "../components/widget";


function Home(){

     const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    return (
        <main className="main">
           <banner className="user_header">
           <h1>Bonjour</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
           </banner>
           <section className="main_container">
                <div className="charts_container">
                    <div className="chart-bar">
                            charts
                        {/* <Chart
                            chartType="Bar"
                            width="100%"
                            height="300px"
                            backgroundColor ="gray"
                            data={data}
                            
                        /> */}
    
                    </div>
                    <div className="chart-card">
                        {/* <Card /> */}
                    </div>
                </div>
                <aside className="aside_left">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </aside>
            </section>
        </main>
    )
}

export default Home