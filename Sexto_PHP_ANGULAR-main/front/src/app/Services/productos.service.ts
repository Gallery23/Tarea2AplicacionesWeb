import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../Interfaces/iproducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}

  todos(): Observable<IProducto[]> {
    return this.clientePhp.get<IProducto[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProducto> {
    const prod = new FormData();
    prod.append('ProductoId', id.toString());
    return this.clientePhp.post<IProducto>(this.urlBase + 'uno', prod);
  }
  insertar(producto: IProducto): Observable<any> {
    const prod = new FormData();
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Cantidad', producto.Cantidad.toString());

    prod.append('FechaIngreso', producto.FechaIngreso.toISOString());

    return this.clientePhp.post(this.urlBase + 'insertar', prod);
  }
  actualizar(producto: IProducto, id: number): Observable<any> {
    const prod = new FormData();
    prod.append('ProductoId', id.toString());
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Cantidad', producto.Cantidad.toString());

    prod.append('FechaIngreso', producto.FechaIngreso.toISOString());

    return this.clientePhp.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    const prod = new FormData();
    prod.append('ProductoId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prod);
  }
  
}