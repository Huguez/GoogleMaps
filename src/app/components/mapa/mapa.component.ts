import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  marcadores: Marcador [] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackbar: MatSnackBar, public matdialog: MatDialog ) {
    if( localStorage.getItem( 'marcadores' ) ){
      this.marcadores = JSON.parse( localStorage.getItem( 'marcadores' ) );
    }
  }

  ngOnInit() {
  }
  
  agregarMarcador( evento ){

    const coords: {lat:number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng, "un titulo", "una descripcion." );

    this.marcadores.push( nuevoMarcador );

    this.guardarStorage();

    this.snackbar.open('Marcador Agregado', 'Cerrar', {duration: 2000} );

  }

  editarMarcador( marcador: Marcador ){
    const dialogRef = this.matdialog.open( MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.descripcion }
    } );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Titulo: ${result.titulo}, desc: ${ result.desc }`);
      
      if( !result ){
        return;
      }
      
      marcador.titulo = result.titulo;
      marcador.descripcion = result.desc;
      
      this.guardarStorage();
      this.snackbar.open('Marcador Editado', 'Cerrar', {duration: 2000} );

    });

    
  }

  borrarMarcador( i ){
    
    this.marcadores.splice( i, 1 );
    this.guardarStorage();  
    this.snackbar.open('Marcador Eliminado', 'Cerrar', {duration: 2000} );
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }

}
