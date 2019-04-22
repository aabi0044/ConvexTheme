import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "./tables-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExtendedTableComponent } from "./extended/extended-table.component";
import { RegularTableComponent } from "./regular/regular-table.component";

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        NgbModule
    ],
    declarations: [
        ExtendedTableComponent,
        RegularTableComponent
    ]
})
export class TablesModule { }
