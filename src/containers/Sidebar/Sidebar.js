import { Link } from 'react-router-dom';

import '../Sidebar/Sidebar.scss'

import SidebarBtn from '../../components/SidebarBtn/SidebarBtn'

import {

    ChartIcon,
    TicketIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubscriptionIcon

} from '../../assests/icons/icons'

import SidebarLogoIcon from '../../assests/images/icons/logo.svg'


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <a href="javascript:void(0)" className="sidebar-logo">
                <img src={SidebarLogoIcon} alt=""/>
                <h2>Dashboard Kit</h2>
            </a>

            

            <Link to="/Second">
                 <SidebarBtn title="Overwiev" icon={<ChartIcon/>}/>
            </Link>
            <Link to="/Ticket">
                <SidebarBtn title="Tickets"  icon={<TicketIcon/>}/>
            </Link>
            <Link to="/Ideas"> 
                <SidebarBtn title="Ideas"  icon={<IdeasIcon/>}/>
            
            </Link>
            <SidebarBtn title="Contacts" icon={<ContactsIcon/>}/>
            <SidebarBtn title="Agents" icon={<AgentsIcon/>}/>
            <SidebarBtn title="Articles" icon={<ArticlesIcon/>}/>
            <SidebarBtn title="Settings" icon={<SettingsIcon/>}/>
            <SidebarBtn title="Subscription" icon={<SubscriptionIcon/>}/>
        </div>
    )
}


export default Sidebar;