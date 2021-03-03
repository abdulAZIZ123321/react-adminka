import '../CenterTableItem/CenterTableItem.scss'


const CenterTableItem = () => {
    return (
        <div className="Item-wrapper">
            <div className="item-left">
                <div className="left-inner">
                    <div className="inner-left">
                        <h6 className="title1">Today’s trends</h6>
                        <p className="text1">as of 25 May 2019, 09:41 PM</p>
                    </div>
                    <div className="inner-right">
                        <p className="text1 beforly">Today</p>
                        <p className="text1 beforly">Yesterday</p>
                    </div>
                </div>
            </div>

            <div className="item-right">
                <div className="right-inner">
                    <div className="inner-sections">
                        <span className="section-title">
                            Resolved
                        </span>
                        <h2 className="section-number">
                            449
                        </h2>
                    </div>
                    <div className="inner-sections">
                        <span className="section-title">
                            Received
                        </span>
                        <h2 className="section-number">
                            426
                        </h2>
                    </div>
                    <div className="inner-sections">
                        <span className="section-title">
                            Average first response time
                        </span>
                        <h2 className="section-number">
                            33m
                        </h2>
                    </div>
                    <div className="inner-sections">
                        <span className="section-title">
                            Average response time
                        </span>
                        <h2 className="section-number">
                            3h 8m
                        </h2>
                    </div>
                    <div className="inner-sections">
                        <span className="section-title">
                            Resolution within SLA
                        </span>
                        <h2 className="section-number">
                            94%
                        </h2>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}


export default CenterTableItem;
