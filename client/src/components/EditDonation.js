import React, { Component } from 'react';
import axios from 'axios'

export default class EditDonation extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            contactNo:"",
            address:"",
            cardType:"",
            expDate:"",
            cvCode:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;


        const {name,contactNo,address,cardType,expDate,cvCode} = this.state;

        const data ={
            name:name,
            contactNo:contactNo,
            address:address,
            cardType:cardType,
            expDate:expDate,
            cvCode:cvCode
            
        }

        console.log(data)
        
        axios.put(`http://localhost:8000/donation/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert(" Updated Successfully")
                this.setState({
                    name:"",
                    contactNo:"",
                    address:"",
                    cardType:"",
                    expDate:"",
                    cvCode:""
                })
                
            }
        })

        
    
    }

   
retriveveDonations(){

        axios.get("./donation").then(res =>{

          if (res.data.success){

            this.setState({

              donations:res.data.existingDonation

            });

    

            console.log(this.state.donation)

          }

        });

      };


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/donation/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  name:res.data.donation.name,
                  contactNo:res.data.donation.contactNo,
                  address:res.data.donation.address,
                  cardType:res.data.donation.cardType,
                  expDate:res.data.donation.expDate,
                  cvCode:res.data.donation.cvCode,

                });

                console.log(this.state.donation);
                      this.retriveveDonations();       
            }
        });

    }

    render() {
        return (
            <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Update Donation</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter Name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          {/* <select id="name"
                          className="form-control"
                          name="name" required
                          placeholder="Enter Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Dark Table Clothes</option>
                           <option>Ballons</option>
                           <option>Red color Table Clothes</option>
                           <option>Dark Lights</option>
                           <option>Green Color chair covers</option>
                           <option>Blue color chair covers</option>
                           <option>Nut&Bolts</option>
                           <option>Side Mirros</option>
                           <option>Tools</option>
                           

                        </select> */}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact No</label>
                        <input type="text"
                         className="form-control"
                         name="contactNo" required
                         placeholder="Enter Contact No"
                         value={this.state.contactNo}
                         onChange={this.handleInputChange}/>
                         </div>


                        

                      

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Address</label>
                          <input type="text"
                          className="form-control"
                          name="address" required
                          placeholder="Enter Address"
                          value={this.state.address}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Card Type</label>
                          <input type="text"
                          className="form-control"
                          name="cardType" required
                          placeholder="Enter Card Type"
                          pattern="[A-Za-z]"
                          value={this.state.cardType}
                          onChange={this.handleInputChange}/>
                        </div>
                        
                         <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Exp Date</label>
                          <input type="text"
                          className="form-control"
                          name="expDate" required
                          placeholder="Enter Exp Date"
                          value={this.state.expDate}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Cv Code</label>
                          <input type="text"
                          className="form-control"
                          name="cvCode" required
                          placeholder="Enter Cv Code"
                          value={this.state.cvCode}
                          onChange={this.handleInputChange}/>
                        </div>



                        

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                            </button>

                    </form>        

                    &nbsp;
           </div>
        )
    }


    }
