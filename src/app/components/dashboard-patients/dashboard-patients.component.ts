import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/inbetween/patients.service';

@Component({
  selector: 'app-dashboard-patients',
  templateUrl: './dashboard-patients.component.html',
  styleUrls: ['./dashboard-patients.component.css'],
  providers: [PatientsService]
})
export class DashboardPatientsComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

}
