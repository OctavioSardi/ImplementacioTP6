import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  Titulo = 'Articulos';

  TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)',
  };
  AccionABMC = 'L'; // inicialmente inicia en el Listado de articulos (buscar con parametros)
  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...',
  };

  // opciones del combo activo
  OpcionesActivo = [
    { Id: null, Nombre: '' },
    { Id: true, Nombre: 'Efectivo' },
    { Id: false, Nombre: 'Credito/Devito' },
  ];

  FormRegistro = new FormGroup({
    IdArticulo: new FormControl(0),
    Calle: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    Altura: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{1,7}'),
    ]),
    IdArticuloFamilia: new FormControl('', [Validators.required]),
    FechaAlta: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
      ),
    ]),
    Activo: new FormControl(true),
  });

  submitted = false;

  ngOnInit() {}
}
