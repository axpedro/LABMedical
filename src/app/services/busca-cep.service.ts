import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private httpCliente : HttpClient) { }

getCep(cep : string): Observable<any>{
  
  const url = `https://viacep.com.br/ws/${cep}/json`; 
  return this.httpCliente.get(url); 
    


    
}


}
