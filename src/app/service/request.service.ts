import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Request } from '../model/request.class';

const url: string = "http://localhost:8080/requests/"
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
  create(request: Request): Observable<JsonResponse> {
  return this.http.post(url, request) as Observable<JsonResponse>;
  }
  get(id: Number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  edit(request: Request): Observable<JsonResponse> {
    return this.http.put(url,request) as Observable<JsonResponse>;
  }
  delete(id: Number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;  
  }
  submitRequest(request: Request):Observable<JsonResponse> {
    return this.http.put(url+"submit-review",request) as Observable<JsonResponse>; 
  }
  listByUserIdNot(id: Number):Observable<JsonResponse>{
    return this.http.get(url+"list-review/"+id) as Observable<JsonResponse>;
  }
  approveRequest(request: Request):Observable<JsonResponse>{
    return this.http.put(url+"approve",request) as Observable<JsonResponse>;
  }
  rejectRequest(request: Request): Observable<JsonResponse>{
    return this.http.put(url+"reject",request) as Observable<JsonResponse>;
  }
}