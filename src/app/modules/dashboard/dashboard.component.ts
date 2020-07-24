import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieChart = [];
  tableData = [];
  constructor( private DBS: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.DBS.bigChart();
    this.cards = this.DBS.card();
    this.pieChart = this.DBS.pieCharts();
    this.tableData = this.DBS.table();
  }

}
