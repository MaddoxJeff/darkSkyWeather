import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-zipcode-dialogue',
  templateUrl: './zipcode-dialogue.component.html',
  styleUrls: ['./zipcode-dialogue.component.scss']
})
export class ZipcodeDialogueComponent implements OnInit {
  public newZipcode: number;
  public eventFunction: any;
  public subscriptions = new Subscription();
  @ViewChild('ModalForm', {static: false }) public modalForm: NgForm;


  constructor(
    private dialogRef: MatDialogRef<ZipcodeDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.newZipcode = this.data.newZipcode;
  }

}
