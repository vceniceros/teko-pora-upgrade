import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-contactform',
  templateUrl: './contact-contactform.component.html',
  styleUrls: ['./contact-contactform.component.css']
})
export class ContactContactformComponent {
  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_emtp1n9', 'template_ns30nze', e.target as HTMLFormElement, 'U6JQI_TrlLKL4pvhT')
      .then((result: EmailJSResponseStatus) => {
        alert("mensaje enviado con exito");
      }, (error) => {
        alert("hubo un error en el envio, intentar nuevamente");
      });
  }
  ngOnInit(): void {

  }

}
