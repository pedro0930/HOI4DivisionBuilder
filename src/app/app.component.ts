import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';


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
  ProductionCost: number;

  SAPerProduction: number;

  SupportCompanies: any[];
  LineBattalions: any[];

  ngOnInit() {
    this.SAPerProduction = 0;
    this.ProductionCost = 0;
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
  }

  clear() {
    this.SupportCompanies = [{Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'} ];
    this.LineBattalions = [];
    for (let i = 0; i < 25; i++) {
      this.LineBattalions.push({Name: 'empty'});
    }
    this.UpdateDivisionStats();
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
        HP: 0.2,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 14.4,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 3,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.16,
        Armor: 0,
        ProductionCost: 42,
      });
    } else if (Company === 'AT') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'AT',
        HP: 0.2,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 2,
        HardAttack: 7.5,
        Defense: 2,
        Breakthrough: 0,
        Pierce: 37.5,
        AirAttack: 0,
        SupplyUse: 0.08,
        Armor: 0,
        ProductionCost: 96,
      });
    } else if (Company === 'hospital') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'hospital',
        HP: 2,
        Organization: 20,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 0,
        HardAttack: 0,
        Defense: 0,
        Breakthrough: 0,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.05,
        Armor: 0,
        ProductionCost: 170,
      });
    } else if (Company === 'engineer') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'engineer',
        HP: 2,
        Organization: 20,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 1.5,
        HardAttack: 0.5,
        Defense: 22,
        Breakthrough: 3,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.1,
        Armor: 0,
        ProductionCost: 123,
      });
    } else if (Company === 'signal') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'signal',
        HP: 1,
        Organization: 20,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 0,
        HardAttack: 0,
        Defense: 0,
        Breakthrough: 0,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.02,
        Armor: 0,
        ProductionCost: 225,
      });
    } else if (Company === 'rocket') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'rocket',
        HP: 0.2,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 25.5,
        HardAttack: 0.5,
        Defense: 6,
        Breakthrough: 4.5,
        Pierce: 2,
        AirAttack: 0,
        SupplyUse: 0.16,
        Armor: 0,
        ProductionCost: 96,
      });
    } else if (Company === 'logistics') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'logistics',
        HP: 1,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 0,
        HardAttack: 0,
        Defense: 0,
        Breakthrough: 0,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.05,
        Armor: 0,
        ProductionCost: 105,
      });
    } else if (Company === 'maintenance') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'maintenance',
        HP: 1,
        Organization: 20,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 0,
        HardAttack: 0,
        Defense: 0,
        Breakthrough: 0,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.03,
        Armor: 0,
        ProductionCost: 100,
      });
    } else if (Company === 'MP') {
      this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
        Name: 'MP',
        HP: 1,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2,
        Pierce: 0,
        AirAttack: 0,
        SupplyUse: 0.02,
        Armor: 0,
        ProductionCost: 52,
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
        HP: 25,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 30,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2
      });
    } else if (Battalion === 'Artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 30,
        HardAttack: 2,
        Defense: 10,
        Breakthrough: 6,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 126,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3
      });
    } else if (Battalion === 'Rocket_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Rocket-artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 40,
        HardAttack: 2,
        Defense: 12,
        Breakthrough: 9,
        Pierce: 2,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 144,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3
      });
    } else if (Battalion === 'Anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 4,
        HardAttack: 15,
        Defense: 4,
        Breakthrough: 6,
        Pierce: 75,
        AirAttack: 0,
        SupplyUse: 0.1,
        ProductionCost: 144,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3
      });
    } else if (Battalion === 'Anti-Air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-Air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 7,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 25,
        AirAttack: 17,
        SupplyUse: 0.1,
        ProductionCost: 120,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1
      });
    } else if (Battalion === 'Marine') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Marine',
        HP: 20,
        Organization: 70,
        RecoveryRate: 0.4,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2.6,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.06,
        ProductionCost: 45,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2
      });
    } else if (Battalion === 'Mountaineers') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mountaineers',
        HP: 20,
        Organization: 70,
        RecoveryRate: 0.4,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2.6,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 42,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2
      });
    } else if (Battalion === 'Paratroop') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Paratroop',
        HP: 22,
        Organization: 70,
        RecoveryRate: 0.4,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2.0,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.06,
        ProductionCost: 39,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2
      });
      // Mobile
    } else if (Battalion === 'Motorized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized',
        HP: 25,
        Organization: 70,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.11,
        ProductionCost: 155,
        Speed: 12,
        Armor: 0,
        CombatWidth: 2
      });
    } else if (Battalion === 'Cavalry') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Cavalry',
        HP: 25,
        Organization: 70,
        RecoveryRate: 0.4,
        Suppression: 2,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.12,
        ProductionCost: 36,
        Speed: 6.4,
        Armor: 0,
        CombatWidth: 2
      });
    } else if (Battalion === 'Motorized_rocket') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized_rocket',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 1,
        SoftAttack: 50,
        HardAttack: 1,
        Defense: 15,
        Breakthrough: 12,
        Pierce: 2,
        AirAttack: 0,
        SupplyUse: 0.28,
        ProductionCost: 277,
        Speed: 12,
        Armor: 0,
        CombatWidth: 3
      });
    } else if (Battalion === 'Mechanized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mechanized',
        HP: 30,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 3.3,
        HardAttack: 2.5,
        Defense: 46,
        Breakthrough: 6,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.14,
        ProductionCost: 530,
        Speed: 12,
        Armor: 10,
        CombatWidth: 2
      });
      // Armored
    } else if (Battalion === 'Light_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 15,
        HardAttack: 4,
        Defense: 4,
        Breakthrough: 26,
        Pierce: 10,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 480,
        Speed: 10,
        Armor: 10,
        CombatWidth: 2
      });
    } else if (Battalion === 'Medium_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 22.5,
        HardAttack: 14,
        Defense: 5,
        Breakthrough: 36,
        Pierce: 61,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 600,
        Speed: 8,
        Armor: 60,
        CombatWidth: 2
      });
    } else if (Battalion === 'Heavy_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 12,
        HardAttack: 12,
        Defense: 6,
        Breakthrough: 36,
        Pierce: 35,
        AirAttack: 0,
        SupplyUse: 0.30,
        ProductionCost: 1000,
        Speed: 5,
        Armor: 70,
        CombatWidth: 2
      });
    } else if (Battalion === 'Super_heavy') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 45,
        HardAttack: 45,
        Defense: 10,
        Breakthrough: 74,
        Pierce: 146,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 1500,
        Speed: 4,
        Armor: 145,
        CombatWidth: 2
      });
    } else if (Battalion === 'Modern_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 49.5,
        HardAttack: 32,
        Defense: 10,
        Breakthrough: 84,
        Pierce: 131,
        AirAttack: 0,
        SupplyUse: 0.25,
        ProductionCost: 1400,
        Speed: 10,
        Armor: 130,
        CombatWidth: 2
      });
      // Light armored variant
    } else if (Battalion === 'Light_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 42,
        HardAttack: 0.5,
        Defense: 4,
        Breakthrough: 2,
        Pierce: 4,
        AirAttack: 0,
        SupplyUse: 0.4,
        ProductionCost: 192,
        Speed: 10,
        Armor: 5,
        CombatWidth: 3
      });
    } else if (Battalion === 'Light_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 6,
        HardAttack: 10,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 50,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 180,
        Speed: 12,
        Armor: 10,
        CombatWidth: 2
      });
    } else if (Battalion === 'Light_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 1,
        Defense: 2,
        Breakthrough: 2.2,
        Pierce: 5,
        AirAttack: 15,
        SupplyUse: 0.2,
        ProductionCost: 150,
        Speed: 12,
        Armor: 5,
        CombatWidth: 1
      });
      // Medium variant
    } else if (Battalion === 'Medium_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 70,
        HardAttack: 1,
        Defense: 12,
        Breakthrough: 6,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.44,
        ProductionCost: 240,
        Speed: 8,
        Armor: 35,
        CombatWidth: 3
      });
    } else if (Battalion === 'Medium_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 5,
        HardAttack: 20,
        Defense: 5,
        Breakthrough: 1.3,
        Pierce: 88,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 288,
        Speed: 8,
        Armor: 60,
        CombatWidth: 2
      });
    } else if (Battalion === 'Medium_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 6.75,
        HardAttack: 3,
        Defense: 2.5,
        Breakthrough: 2.5,
        Pierce: 40,
        AirAttack: 22,
        SupplyUse: 0.1,
        ProductionCost: 144,
        Speed: 8,
        Armor: 45,
        CombatWidth: 2
      });
      // Heavy Variant
    } else if (Battalion === 'Heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 70,
        HardAttack: 1,
        Defense: 4,
        Breakthrough: 2,
        Pierce: 8,
        AirAttack: 22,
        SupplyUse: 0.1,
        ProductionCost: 600,
        Speed: 5,
        Armor: 45,
        CombatWidth: 3
      });
    } else if (Battalion === 'Heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 6,
        HardAttack: 25,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 96,
        AirAttack: 0,
        SupplyUse: 0.3,
        ProductionCost: 500,
        Speed: 5,
        Armor: 70,
        CombatWidth: 2
      });
    } else if (Battalion === 'Heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 6.75,
        HardAttack: 4,
        Defense: 2,
        Breakthrough: 2,
        Pierce: 96,
        AirAttack: 17,
        SupplyUse: 0.1,
        ProductionCost: 200,
        Speed: 5,
        Armor: 45,
        CombatWidth: 1
      });
      // Super Heavy Variant
    } else if (Battalion === 'Super_heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 122,
        HardAttack: 3,
        Defense: 7,
        Breakthrough: 3.5,
        Pierce: 9,
        AirAttack: 0,
        SupplyUse: 0.8,
        ProductionCost: 600,
        Speed: 4,
        Armor: 100,
        CombatWidth: 3
      });
    } else if (Battalion === 'Super_heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 12,
        HardAttack: 70,
        Defense: 7,
        Breakthrough: 1.8,
        Pierce: 170,
        AirAttack: 0,
        SupplyUse: 0.4,
        ProductionCost: 700,
        Speed: 4,
        Armor: 145,
        CombatWidth: 2
      });
    } else if (Battalion === 'Super_heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 17.25,
        HardAttack: 9,
        Defense: 3.5,
        Breakthrough: 3.5,
        Pierce: 98,
        AirAttack: 50,
        SupplyUse: 0.1,
        ProductionCost: 400,
        Speed: 4,
        Armor: 100,
        CombatWidth: 1
      });
      // Modern Variant
    } else if (Battalion === 'Modern_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 120,
        HardAttack: 3,
        Defense: 8,
        Breakthrough: 4,
        Pierce: 10,
        AirAttack: 0,
        SupplyUse: 0.5,
        ProductionCost: 560,
        Speed: 10,
        Armor: 90,
        CombatWidth: 3
      });
    } else if (Battalion === 'Modern_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-tank',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 10,
        HardAttack: 42,
        Defense: 8,
        Breakthrough: 2,
        Pierce: 165,
        AirAttack: 0,
        SupplyUse: 0.25,
        ProductionCost: 672,
        Speed: 10,
        Armor: 130,
        CombatWidth: 2
      });
    } else if (Battalion === 'Modern_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-air',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 9,
        HardAttack: 7.5,
        Defense: 4,
        Breakthrough: 4,
        Pierce: 170,
        AirAttack: 50,
        SupplyUse: 0.1,
        ProductionCost: 336,
        Speed: 10,
        Armor: 90,
        CombatWidth: 1
      });
    } else if (Battalion === 'clear') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'empty',
      });
    }
    this.UpdateDivisionStats();
  }

  UpdateDivisionStats() {
    // Clear all stats due to how clearing unit currently work
    let Speed = 4;
    let MaxPiercing = 0;
    let MaxArmor = 0;
    let BattalionNumber = 0;
    let CompanyNumber = 0;
    let AvgOrganization = 0;

    this.ProductionCost = 0;
    this.SAPerProduction = 0;
    this.MaxSpeed = 0;
    this.HP = 0;
    this.Organization = 0;
    this.RecoveryRate = 0;
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

    for (let i = 0; i < this.SupportCompanies.length; i++) {
      if (this.SupportCompanies[i].Name !== 'empty') {
        CompanyNumber++;
        this.HP += this.SupportCompanies[i].HP;
        AvgOrganization += this.SupportCompanies[i].Organization;
        this.SupplyUse += this.SupportCompanies[i].SupplyUse;
        this.SoftAttack += this.SupportCompanies[i].SoftAttack;
        this.HardAttack += this.SupportCompanies[i].HardAttack;
        this.AirAttack += this.SupportCompanies[i].AirAttack;
        this.Defense += this.SupportCompanies[i].Defense;
        this.Breakthrough += this.SupportCompanies[i].Breakthrough;
        this.Piercing += this.SupportCompanies[i].Pierce;
        this.ProductionCost += this.SupportCompanies[i].ProductionCost;
        if (MaxPiercing < this.SupportCompanies[i].Pierce) {
          MaxPiercing = this.SupportCompanies[i].Pierce;
        }
      }
    }
    for (let i = 0; i < this.LineBattalions.length; i++) {
      if (this.LineBattalions[i].Name !== 'empty') {
        BattalionNumber++;
        this.HP += this.LineBattalions[i].HP;
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.AirAttack += this.LineBattalions[i].AirAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.Suppression += this.LineBattalions[i].Suppression;
        this.Piercing += this.LineBattalions[i].Pierce;
        this.Armor += this.LineBattalions[i].Armor;
        this.ProductionCost += this.LineBattalions[i].ProductionCost;
        if (this.LineBattalions[i].Speed < Speed) {
          Speed = this.LineBattalions[i].Speed;
        }
        if (MaxPiercing < this.LineBattalions[i].Pierce) {
          MaxPiercing = this.LineBattalions[i].Pierce;
        }
        if (MaxArmor < this.LineBattalions[i].Armor) {
          MaxArmor = this.LineBattalions[i].Armor;
        }
      }
    }
    if (BattalionNumber + CompanyNumber > 0) {
      AvgOrganization = Math.floor((AvgOrganization / (BattalionNumber + CompanyNumber) * 100) / 100);
      this.Organization = AvgOrganization;
      this.MaxSpeed = Speed;
      this.SupplyUse = Math.floor(this.SupplyUse * 100) / 100;
      this.Piercing = Math.floor(((this.Piercing / BattalionNumber) * 0.6 + MaxPiercing * 0.4) * 100) / 100;
      this.Armor = Math.floor(((this.Armor / BattalionNumber) * 0.7 + MaxArmor * 0.3) * 100) / 100;
      this.SAPerProduction = Math.floor((this.SoftAttack / this.ProductionCost) * 100) / 100;
    }


    console.log(this.SupportCompanies);
  }
}
