import {Fragment} from 'react';

import '../Ticket/Ticket.scss'

import Table from '../../containers/Table/Table';

import Roof from '../../containers/roof/roof';




const Ticket = () => {
    return (
        <div className="tickets-pages">
        

        <Roof/>


        <Table/>
        </div>
        
    )

}


export default Ticket;