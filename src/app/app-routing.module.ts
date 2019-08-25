import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {  RepositoriesComponent} from './repositories/repositories.component';

// import { SearchComponent } from './search/search.component';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'mygithub', component: MainComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: '', redirectTo:"/mygithub", pathMatch:"full"},
  // { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
