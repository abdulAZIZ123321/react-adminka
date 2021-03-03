import './Table.scss'

import TableItem from '../../components/TableItem/TableItem'
import man from '../../assests/images/Man1.jpg';

const tableInfoArr = [
     {
        id: 0,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },
    
    
    {
        id: 1,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 2,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 3,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 4,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 5,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 6,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 7,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    },

    {
        id: 8,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        Status: 'High',
        ImgLink: man


    }

]

const Table = () => {
    return (
        <div className="table">
           

            
                {
                    tableInfoArr.map((item) => (
                         <TableItem
                            id = {item.id}
                            subject = {item.subject}
                            updateDay = {item.updateDay}
                            customerName = {item.customerName}
                            customerDate = {item.customerDate}
                            dateDay = {item.dateDay}
                            dateHour = {item.dateHour}
                            Status = {item.Status}
                            ImgLink = {item.ImgLink}
                         
                         
                         />
                    ))
                }
            
            
            
            
            
        </div>
    )
}


export default Table;