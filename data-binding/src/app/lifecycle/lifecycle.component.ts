import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input() valorInicial: number = 10
  

  constructor() { 
    console.log("Construtor")
  }

  ngOnChanges() {
    console.log("ngOnChanges")
  }

  ngOnInit() {
    console.log("OnInit")
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
    
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
    
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
    
  }

  ngOnDestroy(): void {
    console.log("onDestroy")
    
  }

  

}
