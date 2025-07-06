import {Component} from '@angular/core';

@Component({
  selector: 'app-sitemap',
  styleUrl: './sitemap.component.scss',
  templateUrl: './sitemap.component.html',
  imports: []
})
export class SitemapComponent {
  public SITEMAP: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Semplifica', path: '/ats'},
    {name: 'Analizza', path: '/document-analyzer'},
    {name: 'Confronta', path: '/documents-comparison'},
    {name: 'Assistenza', path: '/support'},
    {name: 'Mappa del sito', path: '/sitemap'},
    {name: 'Privacy Policy', path: '/privacy-policy'},
  ]
}
