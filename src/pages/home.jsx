import Selectuser from "../service/user";

function Home(){
    return (
        <main className="main">
           <div className="user_select">
            <Selectuser />
            </div>
        </main>
    )
}export default Home