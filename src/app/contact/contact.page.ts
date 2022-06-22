import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Person } from '../person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  selected: Person;
  p1: Person = new Person('Bella Donovan', '303-435-2250', 'bd@unomaha.edu', '6510 Pine St', 19, 'lizard')
  people: Person[] = []

  constructor(private navController: NavController) {
   }

   changePage(){
    this.navController.navigateRoot('/home')
  }

  ngOnInit() {
    this.people = [this.p1, new Person("Mark Staley", '402-...-....', 
    'ms@husker.unl.edu', 'Gretna', 19, 'none'), 
    new Person('James', '402', 'james@gmail.com', 'none', 21, 'none')]

    for (var i=0; i<this.people.length; i++){
      console.log(this.people[i])
    }
  
  }
  onClick(person: Person){
    this.selected = person
  }
}
