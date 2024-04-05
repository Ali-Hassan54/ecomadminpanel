import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
tableData:any[]=[
  {
    sno:'103',id:'12',product:'mobile',rate:'1000',quantity:'2'
  },
  {
    sno:'103', id:'12',product:'mobile',rate:'1000',quantity:'2'
  },
  {
    sno:'103', id:'12',product:'mobile',rate:'1000',quantity:'2'
  }
]
}
