import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { TreetableComponent } from './component/treetable.component';
export { Node, Options} from './models';

@NgModule({
  declarations: [
    TreetableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    TreetableComponent
  ]
})
export class TreetableModule { }
