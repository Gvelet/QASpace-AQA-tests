import { test, expect } from '@playwright/test';
import { Component } from "./component";
import { LocatorProps } from '@/types/page-factory/component';

export class Select extends Component{
    get typeOf(): string {
        return 'select'
    };

    async selectOptionValue(value:string, LocatorProps: LocatorProps = {}):Promise<void>{
        await test.step(`Выбор в ${this.typeOf} option по value`, async () => {
            const locator = this.getLocator(LocatorProps);
            await locator.selectOption(value);
        })
    }

    async selectOptionText(valueLabel:string, LocatorProps: LocatorProps = {}):Promise<void>{
        await test.step(`Выбор в ${this.typeOf} option по label(тексту)`, async () => {
            const locator = this.getLocator(LocatorProps);
            await locator.selectOption({label: valueLabel});
        })
    }

    async selectOptionIndex(indexElement:number = 0, LocatorProps: LocatorProps = {}):Promise<void>{
        await test.step(`Выбор в ${this.typeOf} option по label(тексту)`, async () => {
            const locator = this.getLocator(LocatorProps);
            await locator.selectOption({index: indexElement});
        })
    }

    async selectedValueSelect(value:string, LocatorProps: LocatorProps = {}):Promise<void>{
        await test.step(`Проверка ${this.typeOf} выбранный option`, async () => {
            const locator = this.getLocator(LocatorProps);
            await expect(locator, {message: `Ожидалось, что у ${this.typeOf} value будет равно "${value}"`}).toHaveValue(value)
        })
    }
}