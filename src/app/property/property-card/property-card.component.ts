import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    standalone: true,
    templateUrl:'property-card.component.html',
    styleUrl:'property-card.component.css'
    //template:'<h1>I am a card</h1>'
    //styles:['h1{font-weight:normal;}]
})

export class PropertyCardComponent{
    Property:any={
        "Id":1,
        "Name":"Ambani House",
        "Type":"House",
        "Price":1200
      }
}