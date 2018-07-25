import { Component, OnInit,Inject,Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model'
import { FormBuilder} from '@angular/forms/src/form_builder'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { PlaygroundService } from '../../playground.service'
import { PlaygroundComponent } from '../playground/playground.component';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

   // public _composetweet: FormGroup;

    constructor(private dialogRef: MatDialogRef<ComposeComponent>, @Inject(MAT_DIALOG_DATA) public data : any,
        private composeService : PlaygroundService) { }

    onNoClick(): void {
        this.dialogRef.close();

    }

    ngOnInit() {
       
    }

    postTweet(tweet: string) {
        this.composeService.postTweet(tweet)
            .subscribe((res) => {
                console.log(res);
            });

        this.dialogRef.close();
    }

}
