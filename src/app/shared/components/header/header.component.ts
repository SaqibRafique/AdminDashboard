import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Highcharts = Highcharts;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    console.log("ToggleSidebar is called")
    this.toggleSideBarForMe.emit();
    HC_exporting(Highcharts);
    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    }
  }

