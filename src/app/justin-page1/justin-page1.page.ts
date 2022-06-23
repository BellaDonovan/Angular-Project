import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Chart,Point,registerables } from 'chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-justin-page1',
  templateUrl: './justin-page1.page.html',
  styleUrls: ['./justin-page1.page.scss'],
})
export class JustinPage1Page implements OnInit {
  @ViewChild('myChart') lineChart: any
  graph: any
  labels: number[] = [1,2,3,4,5]
  speedData: number[] = [43,56,33,67,9]
  constructor() { }

  ngAfterViewInit() {
    this.createChart() 
  }
  ngOnInit() {
    
  }
  createChart() {
    this.graph = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels:this.labels,
        datasets:[{
          label:"speed vs time",
          data: this.speedData,
          backgroundColor: "rgb(0,0,0)",
          borderColor: "rgb(38,194,129)",
          borderWidth: 1
        }]
      }
    })
  }

}
