import React, {Component} from 'react'
import {AddClient} from '../clients/AddClient'
import { ClientList } from '../clients/ClientList';

export default class ClientPage extends Component {
       render(){
        let ToRender = <ClientList/>
        switch(this.props.location.pathname){
            case "/clients/add":
            ToRender = <AddClient goto={this.props.history.push}/>
            break;
            default:
            ToRender = <ClientList goto={this.props.history.push}/>
            break;
        }
    return (
            <div>
                <h3>Clients</h3>
                {ToRender}
            </div>
        )
    }

}