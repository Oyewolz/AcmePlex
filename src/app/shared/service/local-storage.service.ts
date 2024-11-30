import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }


 public readonly AUTH_TOKEN_KEY = 'authToken';
 public readonly USER_EMAIL_KEY = 'userEmail';
public readonly USER_NAME_KEY = 'userName';

  constructor() { }

  
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
   

}
