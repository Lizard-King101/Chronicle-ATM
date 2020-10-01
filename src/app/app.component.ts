import { Component, OnInit } from '@angular/core';
import { ElectronService } from './electron.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private electron: ElectronService
    ) {

  }

  ngOnInit() {
    if(!this.electron.isFullScreen()) {
      this.electron.maximizeWindow();
    }
    
  }

  
}
