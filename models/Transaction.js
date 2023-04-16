export class Transaction {
    constructor({id= new Realm.BSON.ObjectId(), date, amount, category}){
        this.transaction_id = id;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
    static schema = {
        name: 'Transaction',
        primaryKey: 'transaction_id',
        properties:{
            transaction_id: 'objectId',
            date: 'string',
            amount: 'number',
            category: 'string',
            month: {type:'linkingObjects', objectType: 'Month', property:'transactions'}
        }
    }
}