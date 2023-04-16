import {createRealmContext, Realm} from '@realm/react'
import {Transaction} from './Transaction'

// monthly target

// maximum daily expense

export class Month {
    constructor({id= new Realm.BSON.ObjectId(),year, target, monthId}){
        this.year = year,
        this.monthId = monthId;
        this.createdAt, new Date();
        this._id = id;
        this.target = target;
        this.name = toString(year) + toString(monthId);
        this.transactions = [];
    }
    static schema = {
        name:'Month',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            year: 'string',
            monthId: 'string',
            transactions:'Transaction[]',
            createdAt: 'date',
            target: 'number',
            name: 'string'

        },
    };
}
export const { useRealm, useQuery, RealmProvider} = createRealmContext({
    schema:[Transaction.schema,Month.schema],
    deleteRealmIfMigrationNeeded: true,
});