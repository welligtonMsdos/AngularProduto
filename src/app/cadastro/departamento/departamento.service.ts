import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVM } from 'src/app/models/response.model';
import { BaseService } from 'src/app/services/base.service';
import { DepartamentoModel } from './departamento.model';

@Injectable({
    providedIn: 'root'
})

export class DepartamentoService extends BaseService {

    constructor(private http: HttpClient){
        super();
    }

    public GetAll() : Observable<any>{
        return this.http.get<any>(`${this.ApiUrl}/Departamento`, this.httpOptions);
    }

    public Post(model: DepartamentoModel) : Observable<ResponseVM>{
        return this.http.post<ResponseVM>(`${this.ApiUrl}/Departamento`, model, this.httpOptions);
    }

    public Delete(id: number): Observable<ResponseVM>{
        return this.http.delete<ResponseVM>(`${this.ApiUrl}/Departamento/${id}`, this.httpOptions);
    }
}