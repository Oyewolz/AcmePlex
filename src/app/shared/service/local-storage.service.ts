import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

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
   
  remove(item: string) {
    localStorage.removeItem(item);
   }

}
