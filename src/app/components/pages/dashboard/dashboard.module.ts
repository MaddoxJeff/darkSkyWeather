// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    declarations: [
        DashboardComponent,

    ],
    imports: [
        SharedModule,
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class homeModule {}