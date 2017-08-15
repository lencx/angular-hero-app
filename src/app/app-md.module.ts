import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule, MdInputModule, MdSortModule} from '@angular/material';

const mdArr = [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSortModule
];

@NgModule({
  imports: mdArr,
  exports: mdArr
})

export class AppMdModule { }
