import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { ProveedoresComponent } from './Views/proveedores/proveedores.component';
import { StockComponent } from './Views/stocks/stocks.component';
import { NuevoProveedorComponent } from './Views/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoProductoComponent } from './views/productos/nuevo-producto/nuevo-productos.component';
/*import { NuevoStockComponent } from './views/stocks/nuevo-stocks/nuevo-stocks.component';
*/

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'productos',
  component: ProductosComponent,
},
{
  path: 'nuevo-producto',
  component: NuevoProductoComponent,
},
{
  path: 'editar-producto/:id',
  component: NuevoProductoComponent,
},
  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path: 'editar-proveedor/:id',
    component: NuevoProveedorComponent,
  },
  {
    path: 'stocks',
    component: StockComponent,
  },
  /*{
    path: 'nuevo-stocks',
    component: NuevoStockComponent,
  },
  {
    path: 'editar-stocks/:id',
    component: NuevoStockComponent,
  },
  */
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
