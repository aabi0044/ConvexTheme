import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from "./forms-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { ArchwizardModule } from 'ng2-archwizard';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { ValidationFormsComponent } from "./validation/validation-forms.component";
import { BasicComponent } from './layouts/basic/basic.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
import { InputsComponent } from './elements/inputs/inputs.component';
import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
import { InputGridComponent } from './elements/input-grid/input-grid.component';
import { NGXFormWizardComponent } from './ngx-wizard/ngx-wizard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CustomFormsModule,
        MatchHeightModule,
        ArchwizardModule,
        NgbModule
    ],
    declarations: [
        ValidationFormsComponent,
        BasicComponent,
        HorizontalComponent,
        HiddenLabelsComponent,
        InputsComponent,
        InputGroupsComponent,
        InputGridComponent,
        NGXFormWizardComponent
    ]

})
export class FormModule { }
