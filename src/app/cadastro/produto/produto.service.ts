import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVM } from 'src/app/models/response.model';
import { BaseService } from 'src/app/services/base.service';
import { ProdutoModel } from './models/produto.model';

@Injectable({
    providedIn: 'root'
})

export class ProdutoService extends BaseService {

    constructor(private http: HttpClient){
        super();
    }

    public GetAll() : Observable<any>{
        return this.http.get<any>(`${this.ApiUrl}/Produto`, this.httpOptions);
    }

    public Post(model: ProdutoModel) : Observable<ResponseVM>{
        return this.http.post<ResponseVM>(`${this.ApiUrl}/Produto`, model, this.httpOptions);
    }

    public Put(model: ProdutoModel) : Observable<ResponseVM>{
        return this.http.put<ResponseVM>(`${this.ApiUrl}/Produto`, model, this.httpOptions);
    }

    public Delete(id: number): Observable<ResponseVM>{
        return this.http.delete<ResponseVM>(`${this.ApiUrl}/Produto/${id}`, this.httpOptions);
    }
}