import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {Http} from "@capacitor-community/http"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = {
    url: ''
  }

  constructor(private http: HttpClient) {}

  public test(): void {
    const url = this.form.url
    this.http.get(url).subscribe(resp => {
      console.log(resp)
    })
    Http.request({url, method: "GET"}).then(resp => console.log(resp))
  }

}
