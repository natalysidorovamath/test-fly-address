import { Subject } from 'rxjs';
import { Client } from "../shared/client.model";
export class ClientListService{
    clientChanged= new Subject<Client[]>();
    startEditing= new Subject<number>();
   private Clients:Client[]=[
        new Client('Иванов И А','Москва Толбухина 11'),
        new Client('Петров П Р','Москва Лобачевского 56'),
        new Client('Сидоров П Р','Москва Котельническая 67'),
        new Client('Протопопов П Р','Москва Чистопрудная 67'),
        new Client('Ильин Р О','Москва Мясницкая 56'),
        new Client('Ивашин Р О','Москва Иванчевского 78'),
      ];
      
      getClients(){
          return this.Clients.slice();
      }
      getClient(index:number){
        return this.Clients[index];
    }
      addClient(ing:Client){
          this.Clients.push(ing);
          this.clientChanged.next(this.Clients.slice());
      }
      addClients(Clients: Client[]){
   
      this.Clients.push(...Clients);
      
      }
      updateClient(index:number, newClient: Client){
          this.Clients[index]= newClient;
          this.clientChanged.next(this.Clients.slice());
      }
      deleteClient(index:number){
          this.Clients.splice( index, 1);
          this.clientChanged.next(this.Clients.slice());
      }

}