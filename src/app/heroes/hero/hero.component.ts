import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:String = 'ironman';
  public age:Number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }
  changeName():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }
  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
