import {test, Page, expect, Locator } from "@playwright/test"
import { ComponentProps, LocatorProps } from '@/types/page-factory/component';
import { locatorTemplateFormat } from "@/utils/page-factory";
import { capitalizeFirstLetter } from "@/utils/generic";

export abstract class Component {
    page: Page;
    locator: string;
    private name: string | undefined;
    private root?: string;

    constructor({page, locator, name, root}){
        this.page = page;
        this.locator = locator;
        this.name = name;
        this.root = root;
    }

    // Возвращает Locator, используя шаблон и параметры.
    getLocator(props: LocatorProps = {}): Locator{
        //Из объекта props извлекается свойство locator. Остальные свойства размещаются в объект context.
        const {locator, ...context} = props; 
        let useLocator = locator || this.locator;

        if(this.root){
            useLocator = `${this.root} ${useLocator}`
        }

        //Если свойство locator есть — используется оно, иначе применяется значение this.locator, заданное в объекте.
        const withTemplate = locatorTemplateFormat(useLocator, context); 
        return this.page.locator(withTemplate);
    };

    // Имя компонента
    get typeOf(): string {
        return 'component'
    };

    // Имя компонента с большой буквы
    get typeOfUpper(): string{
        return capitalizeFirstLetter(this.typeOf)
    };

    // Возвращает имя компонента или выбрасывает ошибку, если оно не задано
    get componentName(): string {
        if(!this.name){
            throw Error('Имя компонента не передано в componentName')
        }

        return this.name
    };

    // Генерирует информативное сообщение об ошибке при выполнении действий с компонентом
    private getErrorMessage(action: string): string {
        return `${this.typeOfUpper} с именем ${this.componentName} и локатором ${this.locator} - ${action}`
    }

        // Проверяет видимость компонента на странице
    async shouldBeVisible(locatorProps: LocatorProps = {}): Promise<void> {
        await test.step(`${this.typeOfUpper} "${this.componentName}" видно на странице`, async () => {
            const locator = this.getLocator(locatorProps);
            await expect(locator, { message: this.getErrorMessage('не видно') }).toBeVisible();
        });
    }

    // Проверяет наличие текста внутри компонента textShouldBeNotEmpty
    async textShouldBeNotEmpty(locatorProps: LocatorProps = {}): Promise<void> {
        await test.step(`${this.typeOfUpper} "${this.componentName}" элемент содержит текст`, async () => {
            const locator = this.getLocator(locatorProps);
            await expect(locator, { message: this.getErrorMessage('элемент без текста') }).not.toBeEmpty();
        });
    }

    async shouldBeNotVisible(locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`${this.typeOf} "${this.componentName}" должен быть не виден пользователю`, async() => {
            const locator = this.getLocator(locatorProps);
            await expect(locator, {message: this.getErrorMessage('Элемент виден пользователю') }).toBeHidden();
        })
    }
    
    async shouldHavePartText(text: string, locatorProps: LocatorProps = {}): Promise<void> {
        await test.step(`${this.typeOfUpper} "${this.componentName}" имеет текст: "${text}"`, async () => {
            const locator = this.getLocator(locatorProps);
            await expect(locator, { message: this.getErrorMessage(`не имеет заданного текста: "${text}"`) }).toContainText(text);
        });
    }

    async shouldHaveText(text:string, locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`${this.typeOfUpper} "${this.componentName}" имеет текст: "${text}"`, async() => {
            const locator = this.getLocator(locatorProps);
            await expect(locator, {message: this.getErrorMessage(`не имеет заданного текста: "${text}"`)}).toHaveText(text);
        })
    }

    // Выполняет клик по компоненту
    async click(locatorProps: LocatorProps = {}): Promise<void> {
        await test.step(`Клик на ${this.typeOf} с именем "${this.componentName}"`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.click();
        });
    }

    // Сранвить текст аттрибута с заданным
    async checkingAttributeValue(nameAttribute: string, text: string, locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Получаем аттрибут ${nameAttribute} у ${this.typeOf} с именем "${this.componentName}" `, async () => {
            const locator = this.getLocator(locatorProps);
            const attributeElement = await locator.getAttribute(nameAttribute);

            expect(attributeElement, { message: `Аттрибут ${nameAttribute} со значением ${attributeElement} совпадает с ${text}` }).toBe(text)
        })
    };

    async haveCount(count: number, locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Кол-во элементов совпадает с заданным - ${count}`, async () => {
            const locator = this.getLocator(locatorProps);

            await expect(locator, {message: `Заданное кол-вл элементов ${count} не совпаадет с текущем`}).toHaveCount(count);
        })
    }

    async haveCountAbsolute(count: number, locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Кол-во элементов >=  ${count}`, async () => {
            const locator = this.getLocator(locatorProps);

            const countElements = await locator.count();
            expect(countElements).toBeGreaterThanOrEqual(count);

        })
    }

    async hover(locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Наведение на ${this.typeOf} с именем ${this.componentName}`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.hover();
        });
    };

    async getText(locatorProps: LocatorProps = {}): Promise<string> {
        return await test.step(`Получение текста "${this.componentName}"  ${this.typeOf}  `, async () => {
            const locator = this.getLocator(locatorProps);
            const text = await locator.textContent();
            return text || '';
        });
    }

}