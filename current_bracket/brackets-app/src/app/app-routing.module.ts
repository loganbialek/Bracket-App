import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';

const routes: Routes = [
      {path : 'angular', component: AngularComponent},
      {path:'aws', component:AwsComponent}            
    ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
