import { test } from '@playwright/test';
import { LocatorProps } from '@/types/page-factory/component';
import { Component } from '@/page-factory/component';

export class Button extends Component {
    get typeOf(): string {
        return 'button'
    };

    async doubleClick(locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Двойное нажатие на ${this.typeOf} с иминем ${this.componentName}`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.dblclick();
        })
    }
}