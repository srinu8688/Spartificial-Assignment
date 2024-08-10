import Header from "../Header"
import "./index.css"

const Home=()=>{
    const kpiData = {
        totalUsers: 100,
        totalPosts: 100,
        activeUsersLast24Hours: 50,
        postsLast24Hours: 30,
      };
    return(
        <>
        <Header/>
        <div className="back">
        <div className="kpi-container">
      <div className="kpi-box">
        <h2>Total Users</h2>
        <p>{kpiData.totalUsers}</p>
      </div>
      <div className="kpi-box">
        <h2>Total Posts</h2>
        <p>{kpiData.totalPosts}</p>
      </div>
      <div className="kpi-box">
        <h2>Users Active in the Last 24 Hours</h2>
        <p className="color-">{kpiData.activeUsersLast24Hours}</p>
      </div>
      <div className="kpi-box">
        <h2>Posts Published in the Last 24 Hours</h2>
        <p>{kpiData.postsLast24Hours}</p>
      </div>
    </div>
    </div>

        </>
    )
}
export default Home

