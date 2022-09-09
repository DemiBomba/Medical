export class Patients {
    subscribe(): (patient: Patients) => import("rxjs").Observable<Object> {
      throw new Error('Method not implemented.');
    }
    _id: string;
    name: string;
    gender: string;
    age: string;
    diagnosis: string;
    constructor(_id='', _name='', gender='', age='', diagnosis='',){
        this._id = _id;
        this.name = _name;
        this.gender = gender;
        this.age = age;
        this.diagnosis = diagnosis;
    }
}
