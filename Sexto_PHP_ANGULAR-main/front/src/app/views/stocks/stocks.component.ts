import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IStock } from '../../Interfaces/istock';
import { StockService } from '../../Services/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],

})
export class StockComponent {

  title = 'Stocks';
  stocks: IStock[];

  constructor(private StockServicio: StockService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.StockServicio.todos().subscribe((listastock) => {
      this.stocks = listastock;
      console.log(listastock);
    });
  }
  alerta() {
    Swal.fire('Stocks', 'Mensaje en Stocks', 'success');
  }

  eliminar(StockId: number) {
    Swal.fire({
      title: 'Stocks',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.StockServicio.eliminar(StockId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Stocks',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Stocks',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

