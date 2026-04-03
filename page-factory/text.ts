import test, { expect } from '@playwright/test';
import { Component } from '@/page-factory/component';

export class Text extends Component {
  get typeOf(): string {
    return 'text';
  }
}