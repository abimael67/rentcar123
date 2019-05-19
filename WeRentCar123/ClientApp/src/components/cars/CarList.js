import React from 'react'
import {connect} from 'react-redux';
import { Button, Table, Divider, Icon, Modal } from 'antd';
const {Column} = Table
const CarList = (props) => {
    const removeCar= (id)=>    
        Modal.confirm({
            title: 'Confirm',
            content: 'Are you sure you want to delete this car?',
            okText: 'Yes, I am',
            onOk:() => props.removeCar(id),
            cancelText: 'No',
          });         
    
    return (
        <div>           
            <Table dataSource={props.cars} rowKey="Id">
            <Column title="Brand" dataIndex="Brand.Name"  />
            <Column title="Model" dataIndex="Model.Name" />
            <Column title="Year" dataIndex="Year" />
            <Column title="Color" dataIndex="Color" />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <span>
                    <a onClick={()=>props.goto('cars/edit/'+record.Id)}><Icon type="edit"/> Edit</a>
                    <Divider type="vertical" />
                    <a style={{color:'red'}} onClick={()=>{removeCar(record.Id)}}><Icon type="delete"/> Delete</a>
                    </span>
                )}
                />
            </Table> 
            <br/> 
            <Button type="primary" onClick={()=> props.goto("/cars/add")}><Icon type="plus"/> Add New</Button>
        </div>
    )
}
function mapStateToProps(state){
    return {
        cars : state.Cars
    }
}
export default connect(mapStateToProps, null)(CarList)