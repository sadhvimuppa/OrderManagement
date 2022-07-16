import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
@Input() orderDetails:any;
@Output() emitService = new EventEmitter();
  constructor(
    public datepipe: DatePipe,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.orderDetails)
    this.orderDetails.dueDate=this.datepipe.transform(this.orderDetails.dueDate, 'yyyy-MM-dd')
  }

  save(){
    this.emitService.next(this.orderDetails)
  }

}
