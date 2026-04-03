import { test } from '@playwright/test';
import { LocatorProps } from '@/types/page-factory/component';
import { Component } from '@/page-factory/component';

export class Image extends Component{
    get typeOf(): string{
        return 'image'
    }

    
}