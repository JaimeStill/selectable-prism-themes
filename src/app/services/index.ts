import { CoreService } from './core.service';
import { SnackerService } from './snacker.service';
import { ThemeService } from './theme.service';

export const Services = [
  CoreService,
  SnackerService,
  ThemeService
];

export * from './core.service';
export * from './snacker.service';
export * from './snippet.service';
export * from './theme.service';
