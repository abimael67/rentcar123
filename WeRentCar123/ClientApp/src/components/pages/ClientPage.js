import React, {Component} from 'react'
import {AddClient} from '../clients/AddClient'
import  ClientList  from '../clients/ClientList';
import { loadAllClients,removeClient, addClient } from '../../services/clients';

export default class ClientPage extends Component {
    constructor(props){
        super(props)
        this.removeClient = this.removeClient.bind(this)
        this.addNewClient = this.addNewClient.bind(this)
    }
    componentDidMount(){
        loadAllClients();
    }
    removeClient(id){
        if(window.confirm("are you sure?"))
            removeClient(id)
            .then(res => {
                if(!res.ok)
                    alert("Could not delete that client")
                else
                loadAllClients(); 
            })
            .catch(err => console.log(err))
    }

    addNewClient(client){
        addClient(client)
        .then(res => {
            if (!res.ok) 
                alert("Error inserting the client")                
            else                 
                this.props.history.push('/clients')                                      
           })
          .catch(error => console.error('Error:', error))
    }

       render(){
        let ToRender = <ClientList/>
        switch(this.props.location.pathname){
            case "/clients/add":
            ToRender = <AddClient goto={this.props.history.push} addNewClient={this.addNewClient} />
            break;
            default:
            ToRender = <ClientList goto={this.props.history.push} removeClient={this.removeClient}/>
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