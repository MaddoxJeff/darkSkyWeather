import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import { DialogNavComponent } from '../dialog-nav/dialog-nav.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  zipCode: number;
  

  constructor() { }

  //constructor(public dialog: MatDialog) { }

  //openDialog() {
  //  let dialogRef = this.dialog.open(DialogNavComponent, {
  //    data: { zipCode: this.zipCode }
   // });
   // dialogRef.afterClosed().subscribe(result => {
   //   this.zipCode= result;
   /// });
 // }



  

  ngOnInit() {
  }

}


