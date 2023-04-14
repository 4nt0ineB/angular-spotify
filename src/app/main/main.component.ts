import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute, public session: SessionService) {}

  ngOnInit() {
    this.session.setUsername(this.route.snapshot.paramMap.get('username'));
  }
}
