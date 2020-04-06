import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Router, ActivatedRoute } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
//export class MyErrorStateMatcher implements ErrorStateMatcher {
 // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
 //   const isSubmitted = form && form.submitted;
 //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
 // }
//}

@Component({
  selector: 'app-dialog-nav',
  templateUrl: './dialog-nav.component.html',
  styleUrls: ['./dialog-nav.component.scss']
})
//export class DialogNavComponent implements OnInit {
//
//  constructor() { }
//
//  ngOnInit() {
//  }
//
//}

export class DialogNavComponent implements OnInit, OnDestroy{

  private _zipcode: number;
  public zapCade: number;
  public newZipcode: number;
  public eventFunction: any;
  public subscriptions = new Subscription();
  @ViewChild('ModalForm', {static: false }) public modalForm: NgForm;

  

  //@Output() zipcodeChange = new EventEmitter<number>();

  //@Input()
  //get zipcode() {
  //  return this._zipcode;
  //}
  //@Output() public ZIPCODE: number;


  //set zipcode(value: number) {
  //  this._zipcode = value;
  //  this.zipcodeChange.emit(this._zipcode)
  //}


  

  //TODO: Don't allow non valid zipcodes
  //updateZipcode(newZip: number) {
  //  this.zipcode = newZip;
  //  this.ZIPCODE = newZip;

  //}

  constructor(
    private dialogRef: MatDialogRef<DialogNavComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  )  { 

  }
  ngOnInit(){
    this.newZipcode = this.data.newZipcode;

   // this.eventFunction = (event: KeyboardEvent) => {
     // if (event.key === 'Enter') {
        //this.Save();
     // }
    //}

    document.addEventListener('keyup', this.eventFunction, false);

  }
  ngOnDestroy(){
    document.removeEventListener('keyup', this.eventFunction, false);

  }

  Cancel() {
    this.dialogRef.close();
  //  document.removeEventListener('keyup', this.eventFunction, false);
  }

  Save(newZip: number) {
    if (this.modalForm.valid) {

      this.dialogRef.close(newZip);
      document.removeEventListener('keyup', this.eventFunction, false);
    }
    ////this.router.navigate(['/home']);
  }

}
