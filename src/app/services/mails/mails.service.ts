import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from 'src/app/models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private httpClient: HttpClient) { }

  async postMail(mail: Mail){
    try {
      const url = 'https://api.baquipex.cl/Correos/correoPortafolio.php';

      return await this.httpClient.post(url, mail).toPromise();
    } catch (error) {
      return {code: 500, status: "Error", message: "Mensaje no enviado -- COD:503, "};
    }
  }
}
