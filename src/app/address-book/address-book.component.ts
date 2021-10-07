import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Client } from '../shared/client.model';
import { ClientListService } from './address-list.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
clients:Client[];
 ClientChanged=new Subject<Client[]>();
 
 private igChangedSub:Subscription;
  constructor(private clientService : ClientListService) { }

  ngOnInit(): void {
    this.clients= this.clientService.getClients();
   this.igChangedSub= this.clientService.clientChanged.subscribe((clients:Client[])=>{
      this.clients= clients;
    })
  }
  onIngredienAdded(client: Client){
  this.clients.push(client);
  }
 ngOnDestroy(){
   this.igChangedSub.unsubscribe();
 }
 onEditItem(index:number){
 this.clientService.startEditing.next(index);
 }

}
