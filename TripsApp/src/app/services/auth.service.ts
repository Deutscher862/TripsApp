import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from 'firebase';

export class SysUser {
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  persistence = 'local';
  user :SysUser;
  daneRef: Observable<any[]>;

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
 
  constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = new SysUser();
    
      fireAuth.authState.subscribe(auth => {
          if(auth){
              alert('Zalogowano!');
          }
          else{
              alert('Wylogowano!');
          }
      })
  }

  createUser(user: SysUser): void {
    const daneRef = this.db.list('users');
    daneRef.push({email : user.email,
      role : user.role, 
    });
  }

  getUser(){
    return this.user;
  }

  getUserList(){
    return this.db.list('users').snapshotChanges();
  }

  getRole(){
    this.daneRef = this.db.list('users').valueChanges();
    this.daneRef.subscribe((res) => {
      res.forEach((data) => {
        if(data.email == this.user.email){
          this.user.role = data.role;
        }
        })
      });
  }

  signup(email, password) {
    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.user = new SysUser();
        this.user.email = email;
        this.user.password = password;
        this.user.role = 'reader';
        this.createUser(this.user);
        console.log('Success!', value);
      })
      
      .catch(err => {
        if(password.length < 6 )
          alert("Hasło powino mieć conajmniej 6 znaków");
        else 
          alert('Something went wrong:' + err.message);
      });    
  }

  login(email, password) {
    return this.fireAuth.setPersistence(this.persistence)
    .then(_ => {
      this.user = new SysUser();
      this.user.email = email;
      this.user.password = password;
      this.getRole();
      return this.fireAuth.signInWithEmailAndPassword(email, password);
    })
    .catch(err => {
        alert('Something went wrong:' + err.message);
    });
  }

  logout() {
    this.fireAuth.signOut();
  }

  updateRole(key: string, value: number) {
    const daneRef = this.db.list('users');
    daneRef.update(key, { "role": value});
    alert("Status zmieniony pomyślnie");
  }

  changePersistence(){
    if(this.persistence == 'local') this.persistence = 'session';
    else this.persistence = 'local';
  }

  canRead(): boolean {
    return (this.user.role == 'admin' || this.user.role == 'employee' || this.user.role == 'vip' || this.user.role == 'reader');
  }

  canReadExclusive(): boolean {
    return (this.user.role == 'admin' || this.user.role == 'employee' || this.user.role == 'vip');
  }

  canEdit(): boolean {
    return (this.user.role == 'admin' || this.user.role == 'employee');
  }

  canDelete(): boolean {
    return (this.user.role == 'admin');
  }

}