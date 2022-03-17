class invoice{
    constructor(date, payment, tax, customer_id){
        this.id=null;
        this.date=date;
        this.payment=payment;
        this.tax=tax;
        this.customer_id=customer_id;
    }
}

module.exports=invoice;