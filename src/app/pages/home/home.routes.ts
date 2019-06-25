import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { UsersComponent } from './users/users.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CommentComponent } from './comment/comment.component';

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
        },
        {
          path: 'driverList',
          component: DriverListComponent
        },
        {
          path: 'comment',
          component: CommentComponent
        }
      ]
    }
];
