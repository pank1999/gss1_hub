import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IconDefinition,
  faDesktop,
  faEnvelopeOpen,
  faHandHoldingHeart,
  faLayerGroup,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/interfaces/employee.interface';
import { UpcomingWorkAnniversary } from 'src/app/utils/employee-constant';

interface CenterMenuItem {
  label: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  envelopeOpen = faEnvelopeOpen;
  userGroup = faUserGroup;
  layerGroup = faLayerGroup;
  handHoldingHeart = faHandHoldingHeart;
  star = faStar;
  desktop = faDesktop;

  constructor(private router: Router) {}

  leftMenu = [
    {
      icon: this.envelopeOpen,
      active: false,
      label: 'Facilities',
    },
    {
      icon: this.desktop,
      active: false,
      label: 'Finance',
    },
    {
      icon: this.handHoldingHeart,
      active: false,
      label: 'Governance',
    },
    {
      icon: this.userGroup,
      active: true,
      label: 'HR',
    },
    {
      icon: this.layerGroup,
      active: false,
      label: 'IT',
    },
    {
      icon: this.star,
      active: false,
      label: 'Favorite',
    },
  ];

  centerMenu: CenterMenuItem[] = [
    {
      icon: this.envelopeOpen,
      label: 'Employee Management',
    },
    {
      icon: this.desktop,
      label: 'Separation Module',
    },
    {
      icon: this.handHoldingHeart,
      label: 'Training',
    },
    {
      icon: this.userGroup,
      label: 'IJP',
    },
    {
      icon: this.layerGroup,
      label: 'P4P',
    },
    {
      icon: this.star,
      label: 'Your Journey',
    },
    {
      icon: this.desktop,
      label: 'I Resolve',
    },
    {
      icon: this.handHoldingHeart,
      label: 'HR- Employee Letters',
    },
    {
      icon: this.userGroup,
      label: 'Employee Certificates',
    },
    {
      icon: this.layerGroup,
      label: 'Employee Benefits',
    },
    {
      icon: this.star,
      label: 'Leave & Attendance',
    },
    {
      icon: this.star,
      label: 'Personal Information',
    },
    {
      icon: this.star,
      label: 'Question Marks',
    },
    {
      icon: this.star,
      label: 'One People Place',
    },
    {
      icon: this.star,
      label: 'Center Stage',
    },
    {
      icon: this.star,
      label: 'Ascent HR',
    },
  ];

  upcomingWorkAnniversary: Employee[] = UpcomingWorkAnniversary;

  ngOnInit(): void {
    this.upcomingWorkAnniversary = this.upcomingWorkAnniversary.slice(0, 4);
  }

  handleClick(menuItem: CenterMenuItem) {
    if (menuItem.label === 'Your Journey')
      this.router.navigateByUrl('/your-journey');
  }
}
