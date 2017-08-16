import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule, MdInputModule, MdSortModule, MdPaginatorModule} from '@angular/material';

const mdArr = [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSortModule,
    MdPaginatorModule
];

@NgModule({
  imports: mdArr,
  exports: mdArr
})

export class AppMdModule { }
