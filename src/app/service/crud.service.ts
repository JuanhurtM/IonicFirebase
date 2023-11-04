import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  create_student(record:{}){
    return this.firestore.collection('student').add(record);
  }

  read_student(){
    return this.firestore.collection('student').snapshotChanges();
  }

  delete_student(id:string){
    return this.firestore.collection('student').doc(id).delete();
  }

  edit_student(id: string, record: {}){
    return this.firestore.collection('student').doc(id).update(record);
  }

}
