import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GitServiceService } from './services/git-service.service';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    NotFoundComponent,
    RepositoriesComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
