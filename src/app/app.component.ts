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
  // Need to update all unit stats
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
    // Infantry
    if (Battalion === 'Infantry') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Infantry',
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
    } else if (Battalion === 'Artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
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
    } else if (Battalion === 'Rocket_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Rocket-artillery',
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
    } else if (Battalion === 'Anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-tank',
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
    } else if (Battalion === 'Anti-Air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-Air',
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
    } else if (Battalion === 'Marine') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Marine',
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
    } else if (Battalion === 'Mountaineers') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mountaineers',
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
    } else if (Battalion === 'Paratroop') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Paratroop',
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
      // Mobile
    } else if (Battalion === 'Motorized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized',
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
    } else if (Battalion === 'Cavalry') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Cavalry',
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
    } else if (Battalion === 'Motorized_rocket') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized_rocket',
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
    } else if (Battalion === 'Mechanized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mechanized',
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
    } else if (Battalion === 'Rocket_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
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
      // Armored
    } else if (Battalion === 'Light_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
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
    } else if (Battalion === 'Medium_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank',
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
    } else if (Battalion === 'Heavy_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank',
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
    } else if (Battalion === 'Super_heavy') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy',
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
    } else if (Battalion === 'Modern_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank',
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
      // Light armored variant
    } else if (Battalion === 'Light_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_artillery',
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
    } else if (Battalion === 'Light_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
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
    } else if (Battalion === 'Light_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
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
      // Medium variant
    } else if (Battalion === 'Medium_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_artillery',
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
    } else if (Battalion === 'Medium_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
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
    } else if (Battalion === 'Medium_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
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
      // Heavy Variant
    } else if (Battalion === 'Heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_artillery',
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
    } else if (Battalion === 'Heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-tank',
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
    } else if (Battalion === 'Heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-air',
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
      // Super Heavy Variant
    } else if (Battalion === 'Super_heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_artillery',
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
    } else if (Battalion === 'Super_heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-tank',
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
    } else if (Battalion === 'Super_heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-air',
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
      // Modern Variant
    } else if (Battalion === 'Modern_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_artillery',
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
    } else if (Battalion === 'Modern_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-tank',
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
    } else if (Battalion === 'Modern_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-air',
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
    this.UpdateDivisionStats();
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
      }
    }
    for (let i = 0; i < this.LineBattalions.length; i++) {
      if (this.LineBattalions[i].Name !== 'empty') {
        this.HP += this.LineBattalions[i].HP;
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.AirAttack += this.LineBattalions[i].AirAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
      }
    }
    AvgOrganization = AvgOrganization / (this.SupportCompanies.length + this.LineBattalions.length);
    this.Organization = AvgOrganization;
    console.log(this.SupportCompanies);
  }
}
