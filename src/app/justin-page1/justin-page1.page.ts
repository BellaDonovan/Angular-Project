import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart,Point,registerables } from 'chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-justin-page1',
  templateUrl: './justin-page1.page.html',
  styleUrls: ['./justin-page1.page.scss'],
})
export class JustinPage1Page implements OnInit {
  @ViewChild('myChart') lineChart: any
  @ViewChild('weatherChart') weatherChart: any
  graph: any
  graph2: any
  labels: number[] = [1,2,3,4,5,6,7,8,9,10]
  speedData: number[] = [43,56,33,67,9,34,124,32,56,22]
  tensionChange: number = 0;
  weatherData: number[] = [0,0,0,0,0,0,0]
  whichGraph: number = 0;

  constructor(private navController: NavController) {}

  ngAfterViewInit() {
    this.createChart()
    //this.createWeatherChart()
  }
  ngOnInit() {
    
  }
  changePage(nav:string) {
    this.navController.navigateRoot(nav)
  }
  change(num:number){
    //this.tensionChange += num
    //console.log(this.tensionChange)
    this.speedData[0] = 150
    this.graph.update()
    //this.lineChart.update()
  }
  randomize() {
    for(var i = 0; i < this.weatherData.length; i++) {
      this.weatherData[i] = Math.floor((Math.random()*21) + 85)
    }
    //this.graph2.update
    if(this.whichGraph == 1) {
      this.graph2.update()
    }
    //console.log(this.weatherData)
  }
  switch() {
    if(this.whichGraph == 0) {
      this.graph.destroy()
      this.createWeatherChart()
      this.whichGraph++
    }
    else {
      this.graph2.destroy()
      this.createChart()
      this.whichGraph--
    }
  }
  createChart() {
    this.graph = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels:this.labels,
        datasets:[{
          label:"speed vs time",
          data: this.speedData,
          fill: false,
          backgroundColor: "rgb(12,76,25)",
          borderColor: "rgb(150,15,150)",
          borderWidth: 2
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 3000,
            easing: 'linear',
            from: 8,
            to: 0,
            loop: true
          }
        },
      }
    })
  }
  createWeatherChart(){
    this.randomize()
    this.graph2 = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      //yAxisID: "f",
      data: {
        labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets:[{
          label:"Temp on Day",
          data: this.weatherData,
          fill: false, //default
          backgroundColor: "rgb(0,0,0)",
          borderColor: "rgb(16,98,230)",
          borderWidth: 2,
          tension: 0, //default
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2
        }]
      },
      options: {

      }
    })
  }
}
