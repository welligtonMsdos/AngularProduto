import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVM } from 'src/app/models/response.model';
import { BaseService } from 'src/app/services/base.service';

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
}