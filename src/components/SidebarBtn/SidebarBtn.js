import './SidebarBtn.scss'


const SidebarBtn = ({title, icon}) => {
    return (
        <button className="SidebarBtn">

            <div className="btn-icon">{icon}</div>
            <span>{title}</span>
        </button>
    )
}



export default SidebarBtn;