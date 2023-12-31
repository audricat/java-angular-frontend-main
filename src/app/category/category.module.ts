import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
   
import { CategoryRoutingModule } from './category-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
   
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }