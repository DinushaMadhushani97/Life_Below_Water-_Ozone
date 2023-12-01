import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    donations:[]
  };

}


componentDidMount(){
  this.retriveveDonations();

}

retriveveDonations(){
  axios.get("http://localhost:8000/donations").then(res =>{
    if(res.data.success){
      this.setState({
        donations:res.data.existingDonations
      });

      console.log(this.state.donations)
    }


  });
}

//report

genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("donations Details List", 50,10);
  doc.autoTable({
  html: '#content'

})

doc.setFontSize(12);
doc.text("Auto Hub Service Station - ", 10,272);
doc.setFontSize(10);
doc.text(" donations Details Report", 52,272);
doc.save('donations Details.pdf')

}

//delete function

onDelete = (id) =>{

  axios.delete(`/donation/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retriveveDonations();
  })
}

//Search donations

filterData(donations,searchKey){

  const result = donations.filter((donation) =>
  donation.name.toLowerCase().includes(searchKey)
)

this.setState({donations:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/donations").then(res =>{
    if(res.data.success){
     
       this.filterData(res.data.existingDonations,searchKey)
      
    }
  });

}
  render() {
    return (
     

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All donations</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       <table className="table table-hover" style={{marginTop:'40px'}} id="content">
         <thead>
           <tr>
           <th scope="col">No</th>
           <th scope="col">Name</th>
           <th scope="col">Contact No</th>
           <th scope="col">Address</th>
           <th scope="col">Card Type</th>
           <th scope="col">Exp Date</th>
           <th scope="col">Cv Code</th>
           <th scope="col">Action</th>
           </tr>
         </thead>
         <tbody>
           {this.state.donations.map((donations,index) =>(
             <tr key={index}>

               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/store/${donations._id}`} style={{textDecoration:'none'}}>
                   {donations.name}
                   </a>
                   </td>

               <td>{donations.contactNo}</td>
               <td>{donations.address}</td>
               <td>{donations.cardType}</td>
               <td>{donations.expDate}</td>
               <td>{donations.cvCode}</td>
               
               <td>
                 <a className="btn btn-warning" href={`/edit/${donations._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(donations._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

               </td>
              </tr>

           ))} 
           
         </tbody>

       </table>
       

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Donation</a></button>
       &nbsp;

       
       <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> GENERATE REPORT</a></button>
    

      </div>
      

    )
  }
}
