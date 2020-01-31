export class Marcador {

    public lat: number;
    public lng: number;

    public titulo = "Sin titulo";
    public descripcion = "sin des";

    constructor( lat: number, lng: number, titulo: string, descripcion: string ) {
        this.lat = lat;
        this.lng = lng;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}