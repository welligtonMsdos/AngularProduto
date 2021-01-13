import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BaseService{

    protected ApiUrl: string = environment.BaseUrl;

    public httpOptions = {

        headers: new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'bearer'
        })

    };

    constructor(){

    }    
}