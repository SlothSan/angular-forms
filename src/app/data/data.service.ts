import { Injectable } from '@angular/core';
import {UserSettings} from "./user-settings";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings | string) : Observable<any> {
    return this.http.post('https://putsreq.com/4iO7MyOVx1GC4x1o500r', "Hello World");
    // return of(userSettings);
  }
}
