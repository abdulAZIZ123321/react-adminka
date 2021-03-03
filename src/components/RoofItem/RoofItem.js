import '../RoofItem/RoofItem.scss'

import Man2 from '../../assests/images/ManHead.jpg'
import search from '../../assests/images/icons/search.svg'
import bell from '../../assests/images/icons/bell.svg'

const RoofItem = () => {
    return (
      <div className="item-wrapper">
            <div className="item-left">
                <h1>Tickets</h1>
            </div>
            <div className="item-right">
                <div className="right-one">
                    <img src={search} alt=""/>
                    <img src={bell} alt=""/>
                </div>
                <div className="right-two">
                    <h6>Jones Ferdinand</h6>
                    <img src={Man2} alt=""/>
                </div>
            </div>
      </div>
    )
}

export default RoofItem;