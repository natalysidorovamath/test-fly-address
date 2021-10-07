import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/shared/client.model';
import { ClientListService } from '../address-list.service';

@Component({
  selector: 'app-address-book-edit',
  templateUrl: './address-book-edit.component.html',
  styleUrls: ['./address-book-edit.component.css']
})
export class AddressBookEditComponent implements OnInit {

  @ViewChild('f') shoppinForm:NgForm;
 subscription:Subscription;
 editMode= false;
 editedIndexItem: number;
 editedItem: Client;
  constructor(private addressService: ClientListService) { }

  ngOnInit(): void {
    this.subscription=this.addressService.startEditing.subscribe(
      (index:number)=>{
        this.editedIndexItem= index;
        this.editMode=true;
        console.log(this.addressService.getClient(index));
        this.editedItem= this.addressService.getClient(index);
        this.shoppinForm.setValue({
          name: this.editedItem.name,
          address: this.editedItem.address
        })
      }
    );
  }
  onAddItem(form:NgForm){
    const value = form.value;
    const client = new Client(value.name, value.address);
    if(this.editMode){
      this.addressService.updateClient(this.editedIndexItem, client);
    }else{
      this.addressService.addClient(client);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onClear(){
    this.shoppinForm.reset();
    this.editMode= false;
  }
  onDelete(){
    this.addressService.deleteClient(this.editedIndexItem);
    this.onClear();
  }

}
