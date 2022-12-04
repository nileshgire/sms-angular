import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'select2';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements AfterViewInit {

  constructor() { 
   }

  ngAfterViewInit() {
    $('.selUser').select2();
  }
  // ngOnInit() { 
  //   $('.selUser').on("change", function(){
  //     alert($(this).val());
  //   });
  //  }

}
