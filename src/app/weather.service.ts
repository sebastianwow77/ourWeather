import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "be6d80a9b36269bb73753db1d778a0ca"
  url: string = ""

  constructor(private http: HttpClient) { }
  getFromUserSelection(city: string){
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    return this.http.get(this.url);
  }
  getFromActualPosition(lon:string,lat:string){//obtenemos informacion del clima segun latitud y long
    this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(this.url);
  }
  getLocation():Promise<any>{
    //obtenemos la ubicacion actual del usuario
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng:resp.coords.longitude, lat:resp.coords.latitude});
      })
    });
  }
}
