import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { SnippetService } from '../../services';

@Component({
  selector: 'hosted-code',
  templateUrl: 'hosted-code.component.html',
  providers: [SnippetService]
})
export class HostedCodeComponent implements OnInit {
  @Input() url: string;
  @Input() lang = 'js';
  @Input() theme = 'snippet-default';

  constructor(
    public snippetSvc: SnippetService
  ) { }

  ngOnInit() {
    this.snippetSvc.getSnippet(this.url, this.lang);
  }
}
