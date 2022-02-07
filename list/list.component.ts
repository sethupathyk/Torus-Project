import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


//   myfunc(item:any){
//     localStorage.setItem("item",item)
//     this.router.navigate(['./details'])
//   }
// }
// fetch(basurl+item).then(async (res) => {
//   this.var=res.json()
//   this.var[item]["USD"]
// })