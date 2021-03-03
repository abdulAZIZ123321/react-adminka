import '../InfoItems/InfoItems.scss'

const InfoItems = () => {
    return (
        <>
            <div className="sections">
                <span className="above-title">Unresolved</span>
                <h1 className="title1">
                    60
                </h1>
            </div>


            <div className="sections">
                <span className="above-title">Overdue</span>
                <h1 className="title1">
                    16
                </h1>
            </div>

            <div className="sections">
                <span className="above-title">Open</span>
                <h1 className="title1">
                    43
                </h1>
            </div>

            <div className="sections">
                <span className="above-title">On hold</span>
                <h1 className="title1">
                    64
                </h1>
            </div>
        </>
    )
}


export default InfoItems;