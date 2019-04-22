import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  ngOnInit() {
    // Customizer JS File
    $.getScript('./assets/js/customizer.js');
  }

  onChange(e){
  	if(e === true){
        (document.getElementsByClassName("sidebar-background")[0] as HTMLElement).style.display = "block";
    }
    else{
        (document.getElementsByClassName("sidebar-background")[0] as HTMLElement).style.display = "none";
    }
  }

}
