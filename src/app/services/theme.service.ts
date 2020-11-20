import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SnippetTheme } from '../models';

@Injectable()
export class ThemeService {
  isLight = false;
  snippetTheme: SnippetTheme = { label: 'Synthwave 84', css: 'snippet-synthwave84' }

  snippetThemes: SnippetTheme[] = [
    { label: 'Coy', css: 'snippet-coy' },
    { label: 'Dark', css: 'snippet-dark' },
    { label: 'Funky', css: 'snippet-funky' },
    { label: 'Okaidia', css: 'snippet-okaidia' },
    { label: 'Solarized Light', css: 'snippet-solarizedlight' },
    { label: 'Tomorrow', css: 'snippet-tomorrow' },
    { label: 'Twilight', css: 'snippet-twilight' },
    { label: 'Default', css: 'snippet-default' },
    { label: 'a11y Dark', css: 'snippet-a11y-dark' },
    { label: 'Atom Dark', css: 'snippet-atom-dark' },
    { label: 'Atelier Sulphur Pool', css: 'snippet-base16-ateliersulphurpool' },
    { label: 'Cb', css: 'snippet-cb' },
    { label: 'Coldark Cold', css: 'snippet-coldark-cold' },
    { label: 'Coldark Dark', css: 'snippet-coldark-dark' },
    { label: 'Coy (No Shadows)', css: 'snippet-coy-without-shadows' },
    { label: 'Darcula', css: 'snippet-darcula' },
    { label: 'Dracula', css: 'snippet-dracula' },
    { label: 'Duotone Dark', css: 'snippet-duotone-dark' },
    { label: 'Duotone Earth', css: 'snippet-duotone-earth' },
    { label: 'Duotone Forest', css: 'snippet-duotone-forest' },
    { label: 'Duotone Light', css: 'snippet-duotone-light' },
    { label: 'Duotone Sea', css: 'snippet-duotone-sea' },
    { label: 'Duotone Space', css: 'snippet-duotone-space' },
    { label: 'GitHub Colors', css: 'snippet-ghcolors' },
    { label: 'Hopscotch', css: 'snippet-hopscotch' },
    { label: 'Material Dark', css: 'snippet-material-dark' },
    { label: 'Material Light', css: 'snippet-material-light' },
    { label: 'Material Oceanic', css: 'snippet-material-oceanic' },
    { label: 'Nord', css: 'snippet-nord' },
    { label: 'Pojoaque', css: 'snippet-pojoaque' },
    { label: 'Shades of Purple', css: 'snippet-shades-of-purple' },
    { label: 'Synthwave 84', css: 'snippet-synthwave84' },
    { label: 'Visual Studio', css: 'snippet-vs' },
    { label: 'VS Code Dark+', css: 'snippet-vsc-dark-plus' },
    { label: 'Xonokai', css: 'snippet-xonokai' }
  ]
  .sort((a, b) => a.label < b.label ? -1 : 1);

  compareSnippetThemes = (a: SnippetTheme, b: SnippetTheme) => a.css === b.css;

  setSnippetTheme = (theme: SnippetTheme) => this.snippetTheme = theme;

  toggleTheme = () => {
    this.isLight = !this.isLight;
    this.setOverlayContainerTheme();
  }

  constructor(
    private overlay: OverlayContainer
  ) {
    this.setOverlayContainerTheme();
  }

  setOverlayContainerTheme = () => {
    if (this.isLight) {
      this.overlay.getContainerElement().classList.remove('app-dark');
      this.overlay.getContainerElement().classList.add('app-light');
    } else {
      this.overlay.getContainerElement().classList.remove('app-light');
      this.overlay.getContainerElement().classList.add('app-dark');
    }
  }
}
