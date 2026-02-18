import {test, Page, expect} from '@playwright/test'

export class BasePage {
    public readonly url: string = '/';
    public readonly root: string = '';

    constructor(public page: Page){};

    // Открытие страницы
    async visit(): Promise<void>{
        await test.step(`Открытие страниц ${this.url}`, async () => {
            await this.page.goto(this.url, {waitUntil: 'networkidle'});
        })
    }

    // Проверка url на странице -  игнорирует query-параметры
    async urlCheckRegex():Promise<void>{
        await test.step(`Проверка что страница ${this.url} верная`, async () => {
            const regex = new RegExp(this.url, 'i');
            await expect(this.page).toHaveURL(regex);
        })
    }

    // Проверка url на странице -  игнорирует query-параметры
    async urlCheck(url:string):Promise<void>{
        await test.step(`Проверка что страница ${this.url} верная`, async () => {
            await expect(this.page).toHaveURL(url);
        })
    }

    // Обновление страницы
    async reload(): Promise<void>{
        await test.step(`Перезагрузка страницы ${this.url}`, async () => {
            await this.page.reload({waitUntil: 'networkidle'});
        })
    }

    // Получаем заголовок страницы
    async getTitle(): Promise<string> {
        return await test.step(`Получаем заголовок страницы`, async () => { 
            return await this.page.title();
        });
    };

    async compareTwoTexts(textOne: string, textTwo: string): Promise<void>{
        await test.step(`Текст ${textOne} равен тексту ${textTwo}`, async () => {
            expect(textOne, { message: `Текст "${textOne}" и "${textTwo}" разный` }).toBe(textTwo);
        });
    }

    async comparePartTwoTexts(textOne: string, textTwo: string): Promise<void>{
        await test.step(`Текст ${textOne} содержит в сете текст ${textTwo}`, async () => {
            expect(textOne.trim(), { message: `В тексте "${textOne}" нет текста "${textTwo}"` }).toContain(textTwo.trim());
        });
    }

    async checkDescriptionPageMeta(page, expectText: string): Promise<void>{
        await test.step(`В мета теге "description" верный текст: ${expectText}`, async () => {
            await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', expectText);
        });
    }

    async checkOGTitlePageMeta(page, expectText: string): Promise<void>{
        await test.step(`В мета теге "og:title" верный текст: ${expectText}`, async () => {
            await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', expectText);
        });
    }
}