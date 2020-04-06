// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

// Pipes
import { SafeHtml } from './services/pipes/safe-html.pipe';

// Third Party Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';

//import { AngularFontAwesomeModule} from '../../node_modules/angular-font-awesome';
import {MatTabsModule, MatRadioModule, MatSelectModule, MatTableModule, MatFormField, MatInputModule, MatSliderModule, MatBadgeModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatMenuModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatAutocompleteModule,MatButtonToggleModule, MatCheckboxModule,MatChipsModule, MatDialogRef} from '@angular/material';


@NgModule({
    declarations: [
        SafeHtml,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule, 
        MatBadgeModule, 
        MatButtonModule, 
        MatTooltipModule, 
        MatDialogModule, 
        MatMenuModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        CdkTableModule,
        ReactiveFormsModule,

        //AngularFontAwesomeModule,

 



    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SafeHtml,
        MatTabsModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule, 
        MatSliderModule, 
        MatBadgeModule, 
        MatButtonModule, 
        MatTooltipModule, 
        MatDialogModule, 
        MatMenuModule,
        MatTableModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        ReactiveFormsModule,

        //AngularFontAwesomeModule,

    

    ]
})

export class SharedModule { }