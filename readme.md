# Selectable Prism Themes

Try it out [live](https://jaimestill.github.io/selectable-prism-themes/).

![selectable-prism-themes](https://user-images.githubusercontent.com/14102723/99750999-61991d80-2aaf-11eb-95c6-8b61bfa9b0cd.gif)

## [snippet.scss](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/theme/snippet.scss)

Themes are imported within class names indicative of the theme.

## [theme.service.ts](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/app/services/theme.service.ts)

Keeps track of an array of available themes, as well as the currently selected theme.

## [snippet.service.ts](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/app/services/snippet.service.ts)

Exposes a `snippet$: Observable<SafeHtml>` stream that is set when `getSnippet(url: string, lang: string)` is called. The url passed to `getSnippet()` should return a text file, such as any raw GitHub code file.

When the text is received, the `snippet$` stream is updated with the HTML generated from calling `highlight`.

## [hosted-code.component.ts](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/app/components/hosted-code/hosted-code.component.ts)

Receives a `url`, `lang`, and `theme` property. When the component initializes, it calls `snippetSvc.getSnippet(this.url, this.lang)` to initialize the `snippet$` stream inside of **SnippetService**. **SnippetService** is scoped local to the component.

## [hosted-code.component.html](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/app/components/hosted-code/hosted-code.component.html)

The `snippet$` stream is subscribed to via the `async` pipe and rendered via `[innerHtml]="snippet"`.

The theme passed to the component is set via `<section [ngClass]="theme">`.

## [home.component.html](https://github.com/JaimeStill/selectable-prism-themes/blob/main/src/app/routes/home/home.component.html)

Demonstrates how to use `<hosted-code>`. The first instance of the element has the theme set dynamically based on a select.
