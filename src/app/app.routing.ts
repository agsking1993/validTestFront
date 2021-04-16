import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ListClientComponent } from './listClients/listClients.component';



const routes: Routes = [
  {path: 'clients', component: ClientsComponent  },
  {path: 'list-clients', component: ListClientComponent }
];

 
export const routing = RouterModule.forRoot(routes);