import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categories: Category[] = [];
  /*------------------------------------------
    --------------------------------------------
    Created constructor
    --------------------------------------------
    --------------------------------------------*/
  constructor(public categoryService: CategoryService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  public searchCategories(key: string): void {
    const results: Category[] = [];
    for(const category of this.categories) {
      if (category.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || category.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || category.id.toString().indexOf(key) !== -1) {
        results.push(category);
      }
    }
    this.categories = results;
    if(results.length === 0 || !key) {
      this.ngOnInit();
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
   deleteCategory(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
         console.log('Category deleted successfully!');
    })
  }

}
