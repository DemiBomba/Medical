import { Injectable } from '@angular/core';
import { Patients } from './patients';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  selectedPatients!: Patients;
  patients!: Patients[];
  constructor( private http: HttpClient) {
    this.selectedPatients = new Patients()
   }
   getPatients(){
    return this.http.get('http://Demi:P5Sf3hgGhQgYHLv@cluster0.6aql49a.mongodb.net/?retryWrites=true&w=majority')
   }

   postPatients(patient: Patients){
    return this.http.get('http://Demi:P5Sf3hgGhQgYHLv@cluster0.6aql49a.mongodb.net/?retryWrites=true&w=majority' )
   }

   putPatients(patient: Patients) {
    return this.http.get('http://Demi:P5Sf3hgGhQgYHLv@cluster0.6aql49a.mongodb.net/?retryWrites=true&w=majority/${patients._id}')
   }

   deletePatients(_id: string) {
    return this.http.get('http://Demi:P5Sf3hgGhQgYHLv@cluster0.6aql49a.mongodb.net/?retryWrites=true&w=majority/${_id}')
   }
}
