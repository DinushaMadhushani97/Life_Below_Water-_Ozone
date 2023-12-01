import React, { Component} from 'react';
import axios from 'axios';

export default class DonationDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            donation:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/donation/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    donation:res.data.donation

                });

                console.log(this.state.donation);
            }
        });

    }

    render() {

        const {name,contactNo,address,cardType,expDate,cvCode} = this.state.donation;

        return (
            
           <div style={{marginTop:'40px'}}>
               <h2>--- Details of the donation---</h2>
               &nbsp;
           <h3>{name}</h3>
           <hr/>


           <dl className="row">
               <dt className="col-sm-3">Contact No</dt>
               <dd className="col-sm-9">{contactNo}</dd>

               <dt className="col-sm-3">Address</dt>
               <dd className="col-sm-9">{address}</dd>

               <dt className="col-sm-3">Card Type</dt>
               <dd className="col-sm-9">{cardType}</dd>

               <dt className="col-sm-3">Exp Date</dt>
               <dd className="col-sm-9">{expDate}</dd>

               <dt className="col-sm-3">Cv Code</dt>
               <dd className="col-sm-9">{cvCode}</dd>

               




           </dl>
               
            
            
           </div>
        )
    }
}