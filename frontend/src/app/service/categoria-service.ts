import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private http = inject(HttpClient);
  private readonly urlEndPoint = "http://localhost:8080/api/v1/categorias/categoria";
  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  mostrarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlEndPoint);
  }

   //mostrar una ctaegoria
  leerCategoria(id : number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.urlEndPoint}/${id}`)
  }

  //crear categoria
  crearCategoria(categoria : Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>
    (this.urlEndPoint, categoria,
      {headers: this.httpHeaders})

  }

    //eliminar categoria
  eliminarCategoria(id : number) : Observable<Categoria>{
    return this.http.delete<Categoria>
    (`${this.urlEndPoint}/${id}`,
      {headers: this.httpHeaders}
     );
  }

    //actualizar
  actualizarCategoria(categoria : Categoria) : Observable<Categoria>{
    return this.http.put<Categoria>(
      `${this.urlEndPoint}/${categoria.idCategoria}`,
      categoria,
      {headers: this.httpHeaders}
    );
  }

}

