import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
signOut() {
this.localStorage.remove(this.localStorage.AUTH_TOKEN_KEY);
this.localStorage.remove(this.localStorage.USER_EMAIL_KEY);
}

  
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    

   
  }

  
isSignedIn(): boolean { 
  return this.localStorage.get(this.localStorage.AUTH_TOKEN_KEY) ? true : false;
}
}
