
<buttontype="button"
        style={{ backgroundColor: "#00000", padding: "7px" }}
        class="btn btn-info btn-sm"
        onClick={() => generatePDF(this.state.deliveries)}
      >
        Download As PDF
      </button>
      <hr/>

const generatePDF = deliveries => {
    const doc = new jsPDF();
    const tableColumn = ["Order ID", "Delivery Type", "Delivery Description", "Contact Number", "Location", "Pay ID"];
    const tableRows = [];
  
    deliveries.map(deliveries => {
      const deliveriesdata = [
        
        deliveries.order_id,
        deliveries.de_type,
        deliveries.de_desc,
        deliveries.contact_no,
        deliveries.location,
        deliveries.pay_id,
   ];
      tableRows.push(deliveriesdata);
    })
    doc.text("Devine Destiny", 70,8).setFontSize(13);
    doc.text("Delivery SUMMARY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("DELIVERYSUMMARY.pdf");
  }
