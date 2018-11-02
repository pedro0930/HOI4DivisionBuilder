import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  closeResult: any;
  constructor(private modalService: NgbModal) {}



  SelectedCompanySlotId: number;
  SelectedBattalionSlotId: number;

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

  ngOnInit() {
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

    this.SupportCompanies = [{Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'} ];
    this.LineBattalions = [];
    for (let i = 0; i < 25; i++) {
      this.LineBattalions.push({Name: 'empty'});
    }
    console.log(this.LineBattalions.length);
  }

  openCompany(content, SelectedCompanySlotId) {
    this.SelectedCompanySlotId = SelectedCompanySlotId;
    console.log(SelectedCompanySlotId);
    this.modalService.open(content, {ariaLabelledBy: 'modal-company-title'}).result.then((result) => {
      this.closeResult = this.SelectCompany(result);
    });
  }

  openBattalion(content, SelectedBattalionSlotId) {
    this.SelectedBattalionSlotId = SelectedBattalionSlotId;
    this.modalService.open(content, {ariaLabelledBy: 'modal-battalion-title'}).result.then((result) => {
      this.closeResult = this.SelectBattalion(result);
    });
  }

  SelectCompany(Company) {
    console.log('Selected Company ', Company);
    // All stats are currently placeholder
    if (Company === 'arty') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'arty',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'AT') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'AT',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'hospital') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'hospital',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'engineer') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'engineer',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'signal') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'signal',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'rocket') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'rocket',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    } else if (Company === 'clear') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'empty',
      });
    }

    this.UpdateDivisionStats();
  }

  SelectBattalion(Battalion) {
    if (Battalion === 'arty') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'arty',
        HP: 20,
        Organization: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 5,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16
      });
    }
  }

  UpdateDivisionStats() {
    // Clear all stats due to how clearing unit currently work
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
    let AvgOrganization = 0;
    for (let i = 0; i < this.SupportCompanies.length; i++) {
      if (this.SupportCompanies[i].Name !== 'empty') {
        this.HP += this.SupportCompanies[i].HP;
        AvgOrganization += this.SupportCompanies[i].Organization;
        this.SupplyUse += this.SupportCompanies[i].SupplyUse;
        this.SoftAttack += this.SupportCompanies[i].SoftAttack;
        this.HardAttack += this.SupportCompanies[i].HardAttack;
        this.AirAttack += this.SupportCompanies[i].AirAttack;
        this.Defense += this.SupportCompanies[i].Defense;
        this.Breakthrough += this.SupportCompanies[i].Breakthrough;
        this.Piercing = 0;
      }
    }
    for (let i = 0; i < this.LineBattalions.length; i++) {

    }
    AvgOrganization = AvgOrganization / (this.SupportCompanies.length + this.LineBattalions.length);
    this.Organization = AvgOrganization;
    console.log(this.SupportCompanies);
  }
}
