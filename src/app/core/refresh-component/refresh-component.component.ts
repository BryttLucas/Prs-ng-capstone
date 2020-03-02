import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refresh-component',
  templateUrl: './refresh-component.component.html',
  styleUrls: ['./refresh-component.component.css']
})
export class RefreshComponentComponent implements OnInit {

  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.router.navigateByUrl("/request/detail/"+this.id);
  }

}
