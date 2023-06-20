import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Flix Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                    <PermIdentityIcon className="icon"/>
                    <span>Users</span></li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                    <StoreMallDirectoryIcon className="icon"/>
                    <span>Products</span></li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span></li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span></li>
                    <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className="icon"/>
                    <span>Stats</span></li>
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notifcations</span></li>
                    <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span></li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span></li>
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span></li>
                    <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span></li>
                <li>
                    <ExitToAppOutlinedIcon className="icon"/>
                    <span>Log Out</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
        
    </div>
  )
}
