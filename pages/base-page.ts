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

    // Проверка url на странице
    async urlCheck():Promise<void>{
        await test.step(`Проверка что страница ${this.url} верная`, async () => {
            const regex = new RegExp(this.url);
            await expect(this.page).toHaveURL(regex);
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
}