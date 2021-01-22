import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {
 cliente:Cliente;


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

salvar():void{
this.clienteService.addCliente(this.cliente).subscribe();
this.saida();

}

  saida():void{
    this.router.navigate(['/clientes']);

}

}