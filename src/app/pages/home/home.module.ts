import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { SearchComponent } from './bus-search/search/search.component';
import { BusListComponent } from './bus-search/bus-list/bus-list.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { UsersComponent } from './users/users.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    BusListComponent,
    BusSearchComponent,
    UsersComponent,
    BusDetailsListComponent,
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
