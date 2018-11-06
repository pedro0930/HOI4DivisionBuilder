import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgbModal, private translate: TranslateService) {
    translate.use('en').then(() => {});
  }

  closeResult: any;

  Background: number;
  SelectedDoctrine: String;
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
  Hardness: number;

  SAPerProduction: number;

  SupportCompanies: any[];
  LineBattalions: any[];

  InfantryTechLevel: number;
  ArtilleryTechLevel: number;
  MechTechLevel: number;
  ATTechLevel: number;
  AATechLevel: number;
  RocketTechLevel: number;
  LightTankLevel: number;
  MediumTankLevel: number;
  HeavyTankLevel: number;
  HardnessDisplay: number;

  ngOnInit() {
    this.ChangeInfantryTechLevel('1918');
    this.ChangeArtilleryTechLevel('1934');
    this.ChangeMechTechLevel('1940');
    this.ChangeLightTankLevel('1934');
    this.ChangeMediumTankLevel('1939');
    this.ChangeHeavyTankLevel('1934');
    this.Background = Math.floor(Math.random() * Math.floor(6));
    this.Hardness = 0;
    this.SelectedDoctrine = 'None';
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
    this.HardnessDisplay = 0;
    this.SupportCompanies = [{Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'} ];
    this.LineBattalions = [];
    for (let i = 0; i < 25; i++) {
      this.LineBattalions.push({Name: 'empty'});
    }
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  clear() {
    this.SupportCompanies = [{Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'}, {Name: 'empty'} ];
    this.LineBattalions = [];
    for (let i = 0; i < 25; i++) {
      this.LineBattalions.push({Name: 'empty'});
    }
    this.SelectedDoctrine = 'None';
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
    } else if (Company === 'Recon') {
        this.SupportCompanies.splice(this.SelectedCompanySlotId, 1, {
          Name: 'Recon',
          HP: 2,
          Organization: 20,
          RecoveryRate: 0.3,
          Suppression: 0,
          SoftAttack: 0.3,
          HardAttack: 0,
          Defense: 10,
          Breakthrough: 1,
          Pierce: 4,
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
        Type: 'Infantry',
        HP: 25,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 3,
        HardAttack: 0.5,
        Defense: 20,
        Breakthrough: 2,
        Pierce: 1,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 40,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Infantry36') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Infantry',
        Type: 'Infantry',
        HP: 25,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 6,
        HardAttack: 1,
        Defense: 23.1,
        Breakthrough: 3.2,
        Pierce: 4,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 50,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Infantry39') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Infantry',
        Type: 'Infantry',
        HP: 25,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 9.5,
        HardAttack: 1.5,
        Defense: 30.8,
        Breakthrough: 4.4,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 60,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Infantry42') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Infantry',
        Type: 'Infantry',
        HP: 25,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 13.2,
        HardAttack: 2.5,
        Defense: 40.8,
        Breakthrough: 6,
        Pierce: 20,
        AirAttack: 0,
        SupplyUse: 0.07,
        ProductionCost: 70,
        Speed: 4,
        Armor: 0,
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
        Type: 'Artillery',
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
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Artillery39') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 33,
        HardAttack: 2,
        Defense: 15,
        Breakthrough: 7,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 144,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Artillery42') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Artillery',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 44.2,
        HardAttack: 2,
        Defense: 18,
        Breakthrough: 8,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 162,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Rocket_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Rocket-artillery',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 40,
        HardAttack: 1,
        Defense: 12,
        Breakthrough: 9,
        Pierce: 2,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 144,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Rocket_artillery43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Rocket-artillery',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 49.4,
        HardAttack: 1,
        Defense: 15,
        Breakthrough: 12,
        Pierce: 2,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 180,
        Speed: 4,
        Armor: 0,
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-tank',
        Type: 'Artillery',
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
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-tank40') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-tank',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 4,
        HardAttack: 24.2,
        Defense: 4,
        Breakthrough: 0,
        Pierce: 105.6,
        AirAttack: 0,
        SupplyUse: 0.1,
        ProductionCost: 180,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-tank43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-tank',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 4,
        HardAttack: 39,
        Defense: 4,
        Breakthrough: 6,
        Pierce: 151.2,
        AirAttack: 0,
        SupplyUse: 0.1,
        ProductionCost: 216,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-Air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-Air',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 7,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 25,
        AirAttack: 19,
        SupplyUse: 0.1,
        ProductionCost: 120,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-Air40') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-Air',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3.5,
        HardAttack: 11,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 60,
        AirAttack: 27.5,
        SupplyUse: 0.1,
        ProductionCost: 150,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Anti-Air43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Anti-Air',
        Type: 'Artillery',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 4,
        HardAttack: 15,
        Defense: 4,
        Breakthrough: 1,
        Pierce: 88,
        AirAttack: 41.6,
        SupplyUse: 0.1,
        ProductionCost: 180,
        Speed: 4,
        Armor: 0,
        CombatWidth: 1,
        Hardness: 0
      });
    } else if (Battalion === 'Marine') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Marine',
        Type: 'Infantry',
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
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Mountaineers') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mountaineers',
        Type: 'Infantry',
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
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Paratroop') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Paratroop',
        Type: 'Infantry',
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
        CombatWidth: 2,
        Hardness: 0
      });
      // Mobile
    } else if (Battalion === 'Motorized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized',
        Type: 'Motorized',
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
        CombatWidth: 2,
        Hardness: 10
      });
    } else if (Battalion === 'Cavalry') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Cavalry',
        Type: 'Cavalry',
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
        CombatWidth: 2,
        Hardness: 0
      });
    } else if (Battalion === 'Motorized_rocket') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Motorized_rocket',
        Type: 'Motorized',
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
        CombatWidth: 3,
        Hardness: 0
      });
    } else if (Battalion === 'Mechanized') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mechanized',
        Type: 'Motorized',
        HP: 30,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 10.8,
        HardAttack: 7.5,
        Defense: 62.1,
        Breakthrough: 9.2,
        Pierce: 16,
        AirAttack: 0,
        SupplyUse: 0.18,
        ProductionCost: 460,
        Speed: 8,
        Armor: 10,
        CombatWidth: 2,
        Hardness: 50
      });
    } else if (Battalion === 'Mechanized42') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mechanized',
        Type: 'Motorized',
        HP: 30,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 14.4,
        HardAttack: 10.5,
        Defense: 76.8,
        Breakthrough: 12,
        Pierce: 52,
        AirAttack: 0,
        SupplyUse: 0.18,
        ProductionCost: 570,
        Speed: 10,
        Armor: 15,
        CombatWidth: 2,
        Hardness: 60
      });
    } else if (Battalion === 'Mechanized44') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Mechanized',
        Type: 'Motorized',
        HP: 30,
        Organization: 60,
        RecoveryRate: 0.3,
        Suppression: 1,
        SoftAttack: 17.4,
        HardAttack: 11.3,
        Defense: 81.6,
        Breakthrough: 13.2,
        Pierce: 93,
        AirAttack: 0,
        SupplyUse: 0.18,
        ProductionCost: 670,
        Speed: 12,
        Armor: 20,
        CombatWidth: 2,
        Hardness: 70
      });
      // Armored
    } else if (Battalion === 'Light_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 8,
        HardAttack: 4,
        Defense: 4,
        Breakthrough: 18,
        Pierce: 15,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 420,
        Speed: 6,
        Armor: 5,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank34') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 13,
        HardAttack: 4,
        Defense: 4,
        Breakthrough: 26,
        Pierce: 10,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 480,
        Speed: 10,
        Armor: 10,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank36') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 16,
        HardAttack: 6,
        Defense: 5,
        Breakthrough: 36,
        Pierce: 10,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 540,
        Speed: 12,
        Armor: 15,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 22,
        HardAttack: 9,
        Defense: 6,
        Breakthrough: 46,
        Pierce: 50,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 600,
        Speed: 14,
        Armor: 30,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Medium_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 19,
        HardAttack: 14,
        Defense: 5,
        Breakthrough: 36,
        Pierce: 61,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 600,
        Speed: 8,
        Armor: 60,
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Medium_tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 25,
        HardAttack: 19,
        Defense: 7,
        Breakthrough: 51,
        Pierce: 81,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 650,
        Speed: 9,
        Armor: 80,
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Medium_tank43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 32,
        HardAttack: 24,
        Defense: 9,
        Breakthrough: 66,
        Pierce: 91,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 700,
        Speed: 10,
        Armor: 90,
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Heavy_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 15,
        HardAttack: 12,
        Defense: 6,
        Breakthrough: 36,
        Pierce: 35,
        AirAttack: 0,
        SupplyUse: 0.30,
        ProductionCost: 1000,
        Speed: 5,
        Armor: 70,
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Heavy_tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 27,
        HardAttack: 30,
        Defense: 8,
        Breakthrough: 52,
        Pierce: 111,
        AirAttack: 0,
        SupplyUse: 0.30,
        ProductionCost: 1080,
        Speed: 6,
        Armor: 110,
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Heavy_tank43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank',
        Type: 'Armored',
        HP: 2,
        Organization: 10,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 35,
        HardAttack: 40,
        Defense: 9,
        Breakthrough: 67,
        Pierce: 131,
        AirAttack: 0,
        SupplyUse: 0.30,
        ProductionCost: 1200,
        Speed: 6,
        Armor: 130,
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Super_heavy') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy',
        Type: 'Armored',
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
        CombatWidth: 2,
        Hardness: 99
      });
    } else if (Battalion === 'Modern_tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank',
        Type: 'Armored',
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
        CombatWidth: 2,
        Hardness: 98
      });
      // Light armored variant
    } else if (Battalion === 'Light_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 34,
        HardAttack: 0.5,
        Defense: 4,
        Breakthrough: 2,
        Pierce: 4,
        AirAttack: 0,
        SupplyUse: 0.4,
        ProductionCost: 288,
        Speed: 10,
        Armor: 5,
        CombatWidth: 3,
        Hardness: 50
      });
    } else if (Battalion === 'Light_tank_artillery36') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 42,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 2.5,
        Pierce: 4,
        AirAttack: 0,
        SupplyUse: 0.4,
        ProductionCost: 324,
        Speed: 12,
        Armor: 10,
        CombatWidth: 3,
        Hardness: 50
      });
    } else if (Battalion === 'Light_tank_artillery41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 46,
        HardAttack: 1.5,
        Defense: 7,
        Breakthrough: 3.5,
        Pierce: 4,
        AirAttack: 0,
        SupplyUse: 0.4,
        ProductionCost: 360,
        Speed: 14,
        Armor: 25,
        CombatWidth: 3,
        Hardness: 50
      });
    } else if (Battalion === 'Light_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
        Type: 'ArmoredVariant',
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
        ProductionCost: 240,
        Speed: 10,
        Armor: 10,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank_anti-tank36') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 6,
        HardAttack: 16,
        Defense: 5,
        Breakthrough: 1.3,
        Pierce: 77,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 270,
        Speed: 12,
        Armor: 15,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank_anti-tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 8,
        HardAttack: 24,
        Defense: 7,
        Breakthrough: 1.8,
        Pierce: 99,
        AirAttack: 0,
        SupplyUse: 0.2,
        ProductionCost: 300,
        Speed: 14,
        Armor: 30,
        CombatWidth: 2,
        Hardness: 80
      });
    } else if (Battalion === 'Light_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 1,
        Defense: 2,
        Breakthrough: 2,
        Pierce: 5,
        AirAttack: 15,
        SupplyUse: 0.1,
        ProductionCost: 150,
        Speed: 10,
        Armor: 5,
        CombatWidth: 1,
        Hardness: 50
      });
    } else if (Battalion === 'Light_tank_anti-air36') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 4.5,
        HardAttack: 1.5,
        Defense: 2.5,
        Breakthrough: 2.5,
        Pierce: 20,
        AirAttack: 17,
        SupplyUse: 0.1,
        ProductionCost: 165,
        Speed: 12,
        Armor: 10,
        CombatWidth: 1,
        Hardness: 50
      });
    } else if (Battalion === 'Light_tank_anti-air41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Light_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 3,
        HardAttack: 1,
        Defense: 2,
        Breakthrough: 2.2,
        Pierce: 35,
        AirAttack: 32,
        SupplyUse: 0.1,
        ProductionCost: 180,
        Speed: 14,
        Armor: 25,
        CombatWidth: 1,
        Hardness: 50
      });
      // Medium variant
    } else if (Battalion === 'Medium_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 42,
        HardAttack: 1,
        Defense: 5,
        Breakthrough: 3,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.44,
        ProductionCost: 432,
        Speed: 8,
        Armor: 45,
        CombatWidth: 3,
        Hardness: 65
      });
    } else if (Battalion === 'Medium_tank_artillery41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 50,
        HardAttack: 1.5,
        Defense: 6,
        Breakthrough: 3,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.44,
        ProductionCost: 468,
        Speed: 9,
        Armor: 50,
        CombatWidth: 3,
        Hardness: 65
      });
    } else if (Battalion === 'Medium_tank_artillery43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 55,
        HardAttack: 2,
        Defense: 7,
        Breakthrough: 4,
        Pierce: 5,
        AirAttack: 0,
        SupplyUse: 0.44,
        ProductionCost: 504,
        Speed: 10,
        Armor: 58,
        CombatWidth: 3,
        Hardness: 65
      });
    } else if (Battalion === 'Medium_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-tank',
        Type: 'ArmoredVariant',
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
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Medium_tank_anti-tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 6,
        HardAttack: 26,
        Defense: 6,
        Breakthrough: 1.5,
        Pierce: 110,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 312,
        Speed: 9,
        Armor: 80,
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Medium_tank_anti-tank43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 8,
        HardAttack: 32,
        Defense: 7,
        Breakthrough: 1.8,
        Pierce: 120,
        AirAttack: 0,
        SupplyUse: 0.22,
        ProductionCost: 336,
        Speed: 10,
        Armor: 90,
        CombatWidth: 2,
        Hardness: 90
      });
    } else if (Battalion === 'Medium_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-air',
        Type: 'ArmoredVariant',
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
        CombatWidth: 1,
        Hardness: 65
      });
    } else if (Battalion === 'Medium_tank_anti-air41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 9,
        HardAttack: 4.5,
        Defense: 3,
        Breakthrough: 3,
        Pierce: 60,
        AirAttack: 32,
        SupplyUse: 0.1,
        ProductionCost: 156,
        Speed: 9,
        Armor: 50,
        CombatWidth: 1,
        Hardness: 65
      });
    } else if (Battalion === 'Medium_tank_anti-air43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Medium_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 11.2,
        HardAttack: 6,
        Defense: 3.5,
        Breakthrough: 3.5,
        Pierce: 70,
        AirAttack: 43,
        SupplyUse: 0.1,
        ProductionCost: 168,
        Speed: 8,
        Armor: 58,
        CombatWidth: 1,
        Hardness: 65
      });
      // Heavy Variant
    } else if (Battalion === 'Heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 55,
        HardAttack: 1,
        Defense: 4,
        Breakthrough: 2,
        Pierce: 8,
        AirAttack: 0,
        SupplyUse: 0.6,
        ProductionCost: 600,
        Speed: 5,
        Armor: 45,
        CombatWidth: 3,
        Hardness: 80
      });
    } else if (Battalion === 'Heavy_tank_artillery41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 74,
        HardAttack: 2,
        Defense: 6,
        Breakthrough: 3,
        Pierce: 8,
        AirAttack: 0,
        SupplyUse: 0.6,
        ProductionCost: 648,
        Speed: 6,
        Armor: 68,
        CombatWidth: 3,
        Hardness: 80
      });
    } else if (Battalion === 'Heavy_tank_artillery43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_artillery',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.1,
        Suppression: 0,
        SoftAttack: 80,
        HardAttack: 2.5,
        Defense: 7,
        Breakthrough: 3.5,
        Pierce: 8,
        AirAttack: 0,
        SupplyUse: 0.6,
        ProductionCost: 720,
        Speed: 6,
        Armor: 90,
        CombatWidth: 3,
        Hardness: 80
      });
    } else if (Battalion === 'Heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-tank',
        Type: 'ArmoredVariant',
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
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Heavy_tank_anti-tank41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 8,
        HardAttack: 42,
        Defense: 6,
        Breakthrough: 1.5,
        Pierce: 140,
        AirAttack: 0,
        SupplyUse: 0.3,
        ProductionCost: 540,
        Speed: 6,
        Armor: 110,
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Heavy_tank_anti-tank43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-tank',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 10,
        HardAttack: 60,
        Defense: 7,
        Breakthrough: 1.8,
        Pierce: 160,
        AirAttack: 0,
        SupplyUse: 0.3,
        ProductionCost: 600,
        Speed: 6,
        Armor: 130,
        CombatWidth: 2,
        Hardness: 95
      });
    } else if (Battalion === 'Heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 6.8,
        HardAttack: 4,
        Defense: 2,
        Breakthrough: 2,
        Pierce: 25,
        AirAttack: 17,
        SupplyUse: 0.1,
        ProductionCost: 200,
        Speed: 5,
        Armor: 45,
        CombatWidth: 1,
        Hardness: 80
      });
    } else if (Battalion === 'Heavy_tank_anti-air41') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 9,
        HardAttack: 4.5,
        Defense: 3,
        Breakthrough: 3,
        Pierce: 60,
        AirAttack: 33,
        SupplyUse: 0.1,
        ProductionCost: 216,
        Speed: 6,
        Armor: 68,
        CombatWidth: 1,
        Hardness: 80
      });
    } else if (Battalion === 'Heavy_tank_anti-air43') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Heavy_tank_anti-air',
        Type: 'ArmoredVariant',
        HP: 0.6,
        Organization: 0,
        RecoveryRate: 0.3,
        Suppression: 0,
        SoftAttack: 11.2,
        HardAttack: 6,
        Defense: 3.5,
        Breakthrough: 3.5,
        Pierce: 88,
        AirAttack: 44,
        SupplyUse: 0.1,
        ProductionCost: 240,
        Speed: 6,
        Armor: 90,
        CombatWidth: 1,
        Hardness: 80
      });
      // Super Heavy Variant
    } else if (Battalion === 'Super_heavy_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_artillery',
        Type: 'ArmoredVariant',
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
        CombatWidth: 3,
        Hardness: 90
      });
    } else if (Battalion === 'Super_heavy_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-tank',
        Type: 'ArmoredVariant',
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
        CombatWidth: 2,
        Hardness: 99
      });
    } else if (Battalion === 'Super_heavy_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Super_heavy_tank_anti-air',
        Type: 'ArmoredVariant',
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
        CombatWidth: 1,
        Hardness: 90
      });
      // Modern Variant
    } else if (Battalion === 'Modern_tank_artillery') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_artillery',
        Type: 'ArmoredVariant',
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
        CombatWidth: 3,
        Hardness: 85
      });
    } else if (Battalion === 'Modern_tank_anti-tank') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-tank',
        Type: 'ArmoredVariant',
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
        CombatWidth: 2,
        Hardness: 98
      });
    } else if (Battalion === 'Modern_tank_anti-air') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'Modern_tank_anti-air',
        Type: 'ArmoredVariant',
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
        CombatWidth: 1,
        Hardness: 85
      });
    } else if (Battalion === 'clear') {
      this.LineBattalions.splice(this.SelectedBattalionSlotId, 1, {
        Name: 'empty',
      });
    }
    this.UpdateDivisionStats();
  }

  UpdateDivisionStats() {

    let Speed = 999;
    let MaxPiercing = 0;
    let MaxArmor = 0;
    let BattalionNumber = 0;
    let CompanyNumber = 0;
    let AvgOrganization = 0;
    let HasRecon = false;

    // Clear all stats due to how clearing units currently work
    this.Reconnaissance = 0;
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
    this.Hardness = 0;
    this.HardnessDisplay = 0;

    for (let i = 0; i < this.SupportCompanies.length; i++) {
      if (this.SupportCompanies[i].Name !== 'empty') {
        CompanyNumber++;
        if (this.SupportCompanies[i].Name === 'Recon') {
          HasRecon = true;
        }
        this.HP += this.SupportCompanies[i].HP;
        if (this.SelectedDoctrine === 'SFLR') {
          this.SoftAttack += this.SupportCompanies[i].SoftAttack * 1.1;
          AvgOrganization += this.SupportCompanies[i].Organization;
          this.HardAttack += this.SupportCompanies[i].HardAttack * 1.05;
          this.SupplyUse += this.SupportCompanies[i].SupplyUse;
          this.AirAttack += this.SupportCompanies[i].AirAttack;
          this.Defense += this.SupportCompanies[i].Defense;
          this.Breakthrough += this.SupportCompanies[i].Breakthrough;
          this.Piercing += this.SupportCompanies[i].Pierce;
          this.ProductionCost += this.SupportCompanies[i].ProductionCost;
          this.RecoveryRate += this.SupportCompanies[i].RecoveryRate;
        } else if (this.SelectedDoctrine === 'SFRL') {
          this.SoftAttack += this.SupportCompanies[i].SoftAttack * 1.5;
          AvgOrganization += this.SupportCompanies[i].Organization + 20;
          this.HardAttack += this.SupportCompanies[i].HardAttack;
          this.SupplyUse += this.SupportCompanies[i].SupplyUse;
          this.AirAttack += this.SupportCompanies[i].AirAttack;
          this.Defense += this.SupportCompanies[i].Defense;
          this.Breakthrough += this.SupportCompanies[i].Breakthrough;
          this.Piercing += this.SupportCompanies[i].Pierce;
          this.ProductionCost += this.SupportCompanies[i].ProductionCost;
          this.RecoveryRate += this.SupportCompanies[i].RecoveryRate;
        } else if (this.SelectedDoctrine === 'SFRR') {
          this.SoftAttack += this.SupportCompanies[i].SoftAttack * 1.6;
          AvgOrganization += this.SupportCompanies[i].Organization + 20;
          this.HardAttack += this.SupportCompanies[i].HardAttack * 1.05;
          this.SupplyUse += this.SupportCompanies[i].SupplyUse;
          this.AirAttack += this.SupportCompanies[i].AirAttack;
          this.Defense += this.SupportCompanies[i].Defense;
          this.Breakthrough += this.SupportCompanies[i].Breakthrough;
          this.Piercing += this.SupportCompanies[i].Pierce;
          this.ProductionCost += this.SupportCompanies[i].ProductionCost;
          this.RecoveryRate += this.SupportCompanies[i].RecoveryRate;
        } else {
          this.SoftAttack += this.SupportCompanies[i].SoftAttack;
          AvgOrganization += this.SupportCompanies[i].Organization;
          this.HardAttack += this.SupportCompanies[i].HardAttack;
          this.SupplyUse += this.SupportCompanies[i].SupplyUse;
          this.AirAttack += this.SupportCompanies[i].AirAttack;
          this.Defense += this.SupportCompanies[i].Defense;
          this.Breakthrough += this.SupportCompanies[i].Breakthrough;
          this.Piercing += this.SupportCompanies[i].Pierce;
          this.ProductionCost += this.SupportCompanies[i].ProductionCost;
          this.RecoveryRate += this.SupportCompanies[i].RecoveryRate;
        }
        if (MaxPiercing < this.SupportCompanies[i].Pierce) {
          MaxPiercing = this.SupportCompanies[i].Pierce;
        }
      }
    }
    for (let i = 0; i < this.LineBattalions.length; i++) {
      if (this.LineBattalions[i].Name !== 'empty') {
        BattalionNumber++;
        // No Doctrine
        if (this.SelectedDoctrine === 'None') {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        // Doctrine bonus for Mobile Warfare LL
    } else if (this.SelectedDoctrine === 'MWLL') {
          if (this.LineBattalions[i].Type === 'Infantry') {
            AvgOrganization += this.LineBattalions[i].Organization + 35;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
          } else if (this.LineBattalions[i].Type === 'Motorized') {
            AvgOrganization += this.LineBattalions[i].Organization + 50;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.4;
          } else if (this.LineBattalions[i].Type === 'Armored') {
            AvgOrganization += this.LineBattalions[i].Organization + 4;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.2;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
          } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
            AvgOrganization += this.LineBattalions[i].Organization;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.2;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
          } else {
            AvgOrganization += this.LineBattalions[i].Organization;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
          }
        // Doctrine bonus for Mobile Warfare LR
    } else if (this.SelectedDoctrine === 'MWLR') {
          if (this.LineBattalions[i].Type === 'Infantry') {
            AvgOrganization += this.LineBattalions[i].Organization + 45;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
          } else if (this.LineBattalions[i].Type === 'Motorized') {
            AvgOrganization += this.LineBattalions[i].Organization + 60;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.4;
          } else if (this.LineBattalions[i].Type === 'Armored') {
            AvgOrganization += this.LineBattalions[i].Organization + 9;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.4;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
          } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
            AvgOrganization += this.LineBattalions[i].Organization;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.2;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
          } else {
            AvgOrganization += this.LineBattalions[i].Organization;
            this.SupplyUse += this.LineBattalions[i].SupplyUse;
            this.SoftAttack += this.LineBattalions[i].SoftAttack;
            this.HardAttack += this.LineBattalions[i].HardAttack;
            this.Defense += this.LineBattalions[i].Defense;
            this.Breakthrough += this.LineBattalions[i].Breakthrough;
            this.CombatWidth += this.LineBattalions[i].CombatWidth;
            this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
          }
        // Doctrine bonus for Mobile Warfare RL
    } else if (this.SelectedDoctrine === 'MWRL') {
        if (this.LineBattalions[i].Type === 'Infantry') {
          AvgOrganization += this.LineBattalions[i].Organization + 25;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'Motorized') {
          AvgOrganization += this.LineBattalions[i].Organization + 30;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'Armored') {
          AvgOrganization += this.LineBattalions[i].Organization + 7;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.4;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.2;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        }
        // Doctrine bonus for Mobile Warfare RR
    } else if (this.SelectedDoctrine === 'MWRR') {
        if (this.LineBattalions[i].Type === 'Infantry') {
          AvgOrganization += this.LineBattalions[i].Organization + 35;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'Motorized') {
          AvgOrganization += this.LineBattalions[i].Organization + 40;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'Armored') {
          AvgOrganization += this.LineBattalions[i].Organization + 12;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.6;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.4;
        } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.2;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.4;
        } else {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        }
      // Doctrine bonus for Superior Firepower LL
    } else if (this.SelectedDoctrine === 'SFLL') {
        if (this.LineBattalions[i].Type === 'Infantry') {
          AvgOrganization += this.LineBattalions[i].Organization + 15;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense * 1.2;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        } else if (this.LineBattalions[i].Type === 'Artillery') {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.1;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
        } else if (this.LineBattalions[i].Type === 'Motorized') {
          AvgOrganization += this.LineBattalions[i].Organization + 5;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense * 1.2;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        } else if (this.LineBattalions[i].Type === 'Armored') {
          AvgOrganization += this.LineBattalions[i].Organization + 5;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
          this.HardAttack += this.LineBattalions[i].HardAttack * 1.1;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
          AvgOrganization += this.LineBattalions[i].Organization + 5;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
          this.HardAttack += this.LineBattalions[i].HardAttack * 1.1;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        } else {
          AvgOrganization += this.LineBattalions[i].Organization;
          this.SupplyUse += this.LineBattalions[i].SupplyUse;
          this.SoftAttack += this.LineBattalions[i].SoftAttack;
          this.HardAttack += this.LineBattalions[i].HardAttack;
          this.Defense += this.LineBattalions[i].Defense;
          this.Breakthrough += this.LineBattalions[i].Breakthrough;
          this.CombatWidth += this.LineBattalions[i].CombatWidth;
          this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
        }
      // Doctrine bonus for Superior Firepower LR
    } else if (this.SelectedDoctrine === 'SFLR') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 20;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.05;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else if (this.LineBattalions[i].Type === 'Artillery') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.05;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.2;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 10;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.25;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.1;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 2;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Doctrine bonus for Superior Firepower RL
    } else if (this.SelectedDoctrine === 'SFRL') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 15;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 5;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 5;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.1;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.1;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Doctrine bonus for Superior Firepower RR
    } else if (this.SelectedDoctrine === 'SFRR') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 20;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.05;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else if (this.LineBattalions[i].Type === 'Artillery') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.1;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.05;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 10;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.3;
        this.HardAttack += this.LineBattalions[i].HardAttack * 1.05;
        this.Defense += this.LineBattalions[i].Defense * 1.2;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 2;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack * 1.2;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.05;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Doctrine bonus for Grand Battleplan L
    } else if (this.SelectedDoctrine === 'GBL') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 20;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.1;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 25;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.1;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 2;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Doctrine bonus for Grand Battleplan R
    } else if (this.SelectedDoctrine === 'GBR') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 20;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.1;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 15;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense * 1.1;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 3;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.1;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.1;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Doctrine bonus for Mass Assault L
    } else if (this.SelectedDoctrine === 'MAL') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 10;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth - 0.4;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 15;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth - 0.4;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.1;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 5;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.1;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.1;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
      // Mass Assault R
    } else if (this.SelectedDoctrine === 'MAR') {
      if (this.LineBattalions[i].Type === 'Infantry') {
        AvgOrganization += this.LineBattalions[i].Organization + 15;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth - 0.4;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.3;
      } else if (this.LineBattalions[i].Type === 'Motorized') {
        AvgOrganization += this.LineBattalions[i].Organization + 10;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough * 1.1;
        this.CombatWidth += this.LineBattalions[i].CombatWidth - 0.4;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate + 0.3;
      } else if (this.LineBattalions[i].Type === 'Armored') {
        AvgOrganization += this.LineBattalions[i].Organization + 2;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else if (this.LineBattalions[i].Type === 'ArmoredVariant') {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      } else {
        AvgOrganization += this.LineBattalions[i].Organization;
        this.SupplyUse += this.LineBattalions[i].SupplyUse;
        this.SoftAttack += this.LineBattalions[i].SoftAttack;
        this.HardAttack += this.LineBattalions[i].HardAttack;
        this.Defense += this.LineBattalions[i].Defense;
        this.Breakthrough += this.LineBattalions[i].Breakthrough;
        this.CombatWidth += this.LineBattalions[i].CombatWidth;
        this.RecoveryRate += this.LineBattalions[i].RecoveryRate;
      }
    }


        // Stats not effected by doctrine
        this.HP += this.LineBattalions[i].HP;
        this.AirAttack += this.LineBattalions[i].AirAttack;
        this.Suppression += this.LineBattalions[i].Suppression;
        this.Piercing += this.LineBattalions[i].Pierce;
        this.Armor += this.LineBattalions[i].Armor;
        this.ProductionCost += this.LineBattalions[i].ProductionCost;
        this.Hardness += this.LineBattalions[i].Hardness;
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
      this.HP = Math.floor(this.HP * 100) / 100;
      this.SoftAttack = Math.floor(this.SoftAttack * 100) / 100;
      this.HardAttack = Math.floor(this.HardAttack * 100) / 100;
      this.RecoveryRate = Math.floor(this.RecoveryRate * 100) / 100;
      this.Organization = AvgOrganization;
      this.MaxSpeed = Speed;
      this.SupplyUse = Math.floor(this.SupplyUse * 100) / 100;
      this.Piercing = Math.floor(((this.Piercing / (BattalionNumber + CompanyNumber)) * 0.6 + MaxPiercing * 0.4) * 100) / 100;
      this.Armor = Math.floor(((this.Armor / (BattalionNumber + + CompanyNumber)) * 0.7 + MaxArmor * 0.3) * 100) / 100;
      this.SAPerProduction = Math.floor((this.SoftAttack / this.ProductionCost) * 100) / 100;
      this.Hardness = Math.floor(this.Hardness / BattalionNumber * 100) / 100;
      this.HardnessDisplay = this.Hardness / 100;
      if (HasRecon === true) {
        this.Reconnaissance += 1;
      }
      if (this.SelectedDoctrine === 'SFLR' || this.SelectedDoctrine === 'SFRR' || this.SelectedDoctrine === 'GBR') {
        this.Reconnaissance += 1;
      }
      // Hack to modify speed if mobile warfare
      if (this.MaxSpeed > 4) {
        // tslint:disable-next-line:max-line-length
        if (this.SelectedDoctrine === 'MWLL' || this.SelectedDoctrine === 'MWLR' || this.SelectedDoctrine === 'MWRL' || this.SelectedDoctrine === 'MWRR') {
          this.MaxSpeed *= 1.1;
        }
      }
    }


    console.log(this.SupportCompanies);
  }
  Doctrine(Doctrine) {
    this.SelectedDoctrine = Doctrine;
    this.UpdateDivisionStats();
  }

  ChangeInfantryTechLevel(year) {
    this.InfantryTechLevel = year;
  }
  ChangeArtilleryTechLevel(year) {
    this.ArtilleryTechLevel = year;
  }
  ChangeMechTechLevel(year) {
    this.MechTechLevel = year;
  }
  ChangeLightTankLevel(year) {
    this.LightTankLevel = year;
  }
  ChangeMediumTankLevel(year) {
    this.MediumTankLevel = year;
  }
  ChangeHeavyTankLevel(year) {
    this.HeavyTankLevel = year;
  }
}
