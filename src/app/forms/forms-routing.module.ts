import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationFormsComponent } from "./validation/validation-forms.component";
import { BasicComponent } from './layouts/basic/basic.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
import { InputsComponent } from './elements/inputs/inputs.component';
import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
import { InputGridComponent } from './elements/input-grid/input-grid.component';
import { NGXFormWizardComponent } from './ngx-wizard/ngx-wizard.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          title: 'Basic Forms'
        }
      },
      {
        path: 'horizontal',
        component: HorizontalComponent,
        data: {
          title: 'Horizontal Forms'
        }
      },
      {
        path: 'hidden-labels',
        component: HiddenLabelsComponent,
        data: {
          title: 'Hidden Labels'
        }
      },
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: 'Inputs'
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups'
        }
      },
      {
        path: 'input-grid',
        component: InputGridComponent,
        data: {
          title: 'Input Grid'
        }
      },
      {
        path: 'validation',
        component: ValidationFormsComponent,
        data: {
          title: 'Validation Forms'
        }
      }, 
      {
        path: 'ngx',
        component: NGXFormWizardComponent,
        data: {
          title: 'NGX Wizard'
        }
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule { }
