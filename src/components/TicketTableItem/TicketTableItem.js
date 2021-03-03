import '../TicketTableItem/TicketTableItem.scss'

import Plus from '../../assests/images/icons/plus.svg'

const TicketTableItem = () => {
    return (
        <div className="father-wrapper">
            <div className="item-left">
                <div className="item-sections two">
                    <h2 className="title1">
                        Unresolved tickets
                    </h2>
                    <a href="#">View details</a>
                </div>
                <div className="item-sections">
                    <p className="text">Group: <span className="insider">Support</span></p>
                </div>
                <div className="item-sections one">
                    <h4 className="title">Waiting on Feature Request</h4>
                    <span className="number">4238</span>
                </div>
                <div className="item-sections one">
                    <h4 className="title">Awaiting Customer Response</h4>
                    <span className="number">1005</span>
                </div>
                <div className="item-sections one">
                    <h4 className="title">Awaiting Developer Fix</h4>
                    <span className="number">914</span>
                </div>
                <div className="item-sections one">
                    <h4 className="title">Pending</h4>
                    <span className="number">281</span>
                </div>
            </div>

            <div className="item-right">
                <div className="item-sections two">
                    <h2 className="title1">
                        Tickets
                    </h2>
                    <a href="#">View details</a>
                </div>
                <div className="item-sections">
                    <p className="text">Today</p>
                </div>
                <div className="item-sections one">
                   <h3 className="title2">Create new task</h3>
                   <a href="#">
                       <img src={Plus} alt=""/>
                   </a>
                </div>
                <div className="item-sections one">
                   <div className="input">
                        <input type="checkbox" name="" id=""/>
                        <h4 className="title">Waiting on Feature Request</h4>
                   </div>
                    <span className="other one">Urgent</span>
                </div>
                <div className="item-sections one">
                    <div className="input">
                        <input type="checkbox" name="" id=""/>
                        <h4 className="title">Waiting on Feature Request</h4>
                   </div>
                    <span className="other two">New</span>
                </div>
                <div className="item-sections one">
                    <div className="input">
                        <input type="checkbox" name="" id=""/>
                        <h4 className="title">Waiting on Feature Request</h4>
                   </div>
                    <span className="other three">Default</span>
                </div>
                
            </div>
        </div>
        

    )
}


export default TicketTableItem;