import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { UsersComponent } from './users/users.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';

export const homeRoutes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: 'search',
          pathMatch: 'full'
        },
        {
          path: 'search',
          component: BusSearchComponent
        },
        {
          path: 'users',
          component: UsersComponent
        },
        {
          path: 'busDetailsList',
          component: BusDetailsListComponent
        }
      ]
    }
];
