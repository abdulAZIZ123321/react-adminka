import '../TableItem/TableItem.scss'

const TableItem = (props) => {
    const {
        id,
        subject,
        updateDay,
        customerName,
        customerDate,
        dateDay,
        dateHour,
        Status,
        ImgLink 
    } = props;


    return (
      <div className="table-item">
          <div className="item-left">
            <img src={ImgLink} alt=""/>
            <div className="left-info">
                <h5>{subject}</h5>
                <h6>{updateDay}</h6>
            </div>
          </div>

          <div className="item-right">
                <div className="customer-name">
                    <h5>{customerName}</h5>
                    <h6>{customerDate}</h6>
                </div>
                <div className="customer-name">
                    <h5>{dateDay}</h5>
                    <h6>{dateHour}</h6>
                </div>
                <h3 className="table-tag">{Status}</h3>
          </div>
      </div>
    )
}

export default TableItem;