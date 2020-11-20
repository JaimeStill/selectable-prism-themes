import {
  DomSanitizer,
  SafeHtml
} from '@angular/platform-browser';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CoreService } from './core.service';

import * as prism from 'prismjs';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';

@Injectable()
export class SnippetService {
  private snippet = new BehaviorSubject<SafeHtml>(null);
  snippet$ = this.snippet.asObservable();

  constructor(
    private coreSvc: CoreService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  private highlight = (code: string, lang: string): string => prism.highlight(code, prism.languages[lang || 'js'], lang || 'js');

  getSnippet = (url: string, lang: string): Promise<SafeHtml> => new Promise((resolve, reject) => {
    this.http.get<string>(url, this.coreSvc.getTextOptions())
      .subscribe(
        data => {
          const res = this.sanitizer.bypassSecurityTrustHtml(this.highlight(data, lang));
          this.snippet.next(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      )
  });
}
