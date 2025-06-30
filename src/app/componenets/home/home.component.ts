import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre = '';
  email = '';
  telefono = '';
  asunto = '';
  mensaje = '';

  enviarFormulario() {
    if (this.nombre && this.email && this.asunto && this.mensaje) {
      console.log('Formulario enviado:', {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        asunto: this.asunto,
        mensaje: this.mensaje
      });
      alert('Formulario enviado correctamente ✅');
    }
  }
}
