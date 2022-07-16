import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOrderComponent } from '../edit-order/edit-order.component';

interface Order {
  orderNumber: number;
  dueDate: Date;
  customerName: string;
  customerAddress: string;
  customerPhone: number;
  orderTotal: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orders: Order[] = [];
  public deleteOrder: Order = <Order>{};

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.orders = [
      {
        orderNumber: 1,
        dueDate: new Date("2022-10-12"),
        customerName: 'Manj',
        customerAddress: 'Pune',
        customerPhone: 9876543210,
        orderTotal: 5421
      },
      {
        orderNumber: 2,
        dueDate: new Date("2022-11-17"),
        customerName: 'Raj',
        customerAddress: 'Hyderabad',
        customerPhone: 9876543210,
        orderTotal: 541
      },
      {
        orderNumber: 3,
        dueDate: new Date("2022-09-19"),
        customerName: 'Stacy',
        customerAddress: 'Bangalore',
        customerPhone: 9876543210,
        orderTotal: 8921
      },
      {
        orderNumber: 4,
        dueDate: new Date("2022-08-02"),
        customerName: 'Jessica',
        customerAddress: 'Mangalore',
        customerPhone: 9876543210,
        orderTotal: 9210
      },
    ]
  }

  edit(order: Order) {
    const modalRef = this.modalService.open(EditOrderComponent);
    modalRef.componentInstance.orderDetails = order;
    debugger
    modalRef.result.then((res) => {
      if (res == "Ok") {
        modalRef.componentInstance.emitService.subscribe((res: any) => {
          debugger
          modalRef.close();
          this.orders.forEach(ele => {
            if (ele.orderNumber == res.orderNumber) {
              ele = res;
            }
          })
        })
      }
    })

  }

  delete(content: any, order: Order, i: any) {
    const modelRef = this.modalService.open(content);
    modelRef.result.then((res) => {
      console.log(res)
      if (res == "Ok") {
        this.orders.splice(i, 1)
      }
    })
    this.deleteOrder = order;
  }

  create() {
    const order: Order = <Order>{};
    const modalRef = this.modalService.open(EditOrderComponent);
    modalRef.componentInstance.orderDetails = order;
    modalRef.componentInstance.emitService.subscribe((res: any) => {
      console.log(res)
      this.orders.push(res);
      modalRef.close();
    })
  }
}
