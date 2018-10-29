import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal){}

  openCompany(content, slot) {
    this.SelectedCompanySlotId = slot;
    this.modalService.open(content, {ariaLabelledBy: 'CompanySelect'
    });
  }


  SelectedCompanySlotId: number;
  
  MaxSpeed: number;
  HP: number;
  Organization: number;
  RecoveryRate: number;
  Reconnaissance: number;
  Suppression: number;
  SupplyUse: number;
  SoftAttack: number;
  HardAttack: number;
  AirAttack: number;
  Defense: number;
  Breakthrough: number;
  Armor: number;
  Piercing: number;
  CombatWidth: number;
  
  SupportCompanies: any[];
  LineBattalions: any[];

  ngOnInit(){
    this.MaxSpeed = 0;
    this.HP = 0;
    this.Organization = 0;
    this.RecoveryRate = 0;
    this.Reconnaissance = 0;
    this.Suppression = 0;
    this.SupplyUse = 0;
    this.SoftAttack = 0;
    this.HardAttack = 0;
    this.AirAttack = 0;
    this.Defense = 0;
    this.Breakthrough = 0;
    this.Armor = 0;
    this.Piercing = 0;
    this.CombatWidth = 0;

    this.SupportCompanies = [null, null, null, null, null]
    this.LineBattalions = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
  }

  SelectCompany(Company){
    console.log("Selected Company ", Company)
    if(Company == "arty"){
      
    }
  }
}