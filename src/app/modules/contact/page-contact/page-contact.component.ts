import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, timer } from 'rxjs';
import { Mail } from 'src/app/models/mail';
import { ResponseApi } from 'src/app/models/responseApi';
import { MailsService } from 'src/app/services/mails/mails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  typeContact : 'gmail' | 'whatsapp' = 'gmail';
  messageLoading: string = "Cargando  . . .";

  loading: boolean = false;

  formContact: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', []),
    description: new FormControl('', [Validators.required]),
  })

  constructor(private mailService: MailsService) { }

  ngOnInit(): void {
  }

  changeButtonRadio(type: 'gmail' | 'whatsapp'){
    this.typeContact = type;
  }

  changeLoading(){
    this.loading = !this.loading;
  }

  async sendMail(){
    this.messageLoading = "Enviando Correo  . . ."

    this.loading = await true;

    const mail: Mail = {
      name: this.formContact.value.name,
      subject: this.formContact.value.subject,
      mail: this.formContact.value.mail,
      phone: this.formContact.value.phone,
      description: this.formContact.value.description
    }

    const x: ResponseApi | any = await this.mailService.postMail(mail);

    if(await x.code == 200){
      this.formContact.reset();
      this.alertSucces(x.message);
    }else{
      this.alertError(x.message);
    }
    
    this.loading = false
    
  }

  alertSucces(message: string){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      icon: 'success',
      title: message+'  . . .',
      // didOpen: (toast) => {
      //   this.changeLoading();
      // },
      // didClose: () => {
      //   this.changeLoading();
      // }
    })
  }

  alertError(message: string){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000,
      icon: 'error',
      title: message
    })
  }


}
