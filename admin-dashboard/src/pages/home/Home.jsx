import { List } from "../../components/Table/Table"
import { Chart } from "../../components/chart/Chart"
import { Featured } from "../../components/featured/Featured"
import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Widget } from "../../components/widget/Widget"
import "./home.scss"
export const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List />
          </div>
        </div>
    </div>
  )
}
