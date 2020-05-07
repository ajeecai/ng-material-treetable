import { Component } from '@angular/core';
import { Node , TreeTableNode} from './treetable/models';
import { mockTree } from './treetable/mocks/mockTree';
import { mockTreeAsArrayOfNodes } from './treetable/mocks/mockTreeAsArrayOfNodes';
import { Folder, Task } from './treetable/mocks/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  singleRootTree: Node<Folder> = mockTree;
  arrayOfNodesTree: Node<Task>[] = mockTreeAsArrayOfNodes;
  
  myIcon(elem: TreeTableNode<Folder>) : string {
    if (elem === undefined) {
      return '';
    }
    else if (elem.isExpanded) {
      return 'folder_open';
    }
    else if (elem.value.name == 'Sales') {
      return 'attach_money';
    }
    else if (elem.value.name == 'Charts') {
      return 'pie_chart';
    }
    else {
      return 'folder';
    }
  }
}
