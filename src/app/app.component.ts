import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patients } from './patients';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'medical';
  constructor(private patientsService: PatientsService){}
  
  patients!: Patients[]

  ngOnInit(){
    this.getPatients();
  }
  


  getPatients(){
    this.patientsService.getPatients{}
    .subscribe((res: Patients[]) => {
      this.patientsService.patients = res as Patients[];
    })
  }

  postPatients(patients: Patients){
    
    this.patientsService.postPatients.subscribe((patients) => {
      this.patients= patients;
      this.patientsService.selectedPatients = new Patients
    })
  }

  putPatients(patients: Patients){
    this.patientsService.putPatients(patients)
    .subscribe((res: Patients[]) =>{
      this.getPatients()
      this.patientsService.selectedPatients = new Patients
    })
  }

  deletePatient(_id: string){
    this.patientsService.deletePatients(_id)
    .subscribe((res: any) =>{
      this.getPatients()
      this.patientsService.selectedPatients = new Patients()
    })
  }
}

function subscribe(_arg0: (res: Patients[]) => void) {
  throw new Error('Function not implemented.');
}

