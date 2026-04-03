import { test, expect } from '@playwright/test';
import { LocatorProps } from '@/types/page-factory/component';
import { FillProps, FilesSet, TypeOptions } from '@/types/page-factory/inputComponent';
import { Component } from '@/page-factory/component';

export class Input extends Component {
    get typeOf(): string {
        return 'input'
    };

    // 2 аргумента - вводимый текст и если задаем { validateValue: true } то проверка что ввелось в поле все верно
    async fill(value: string, fillProps: FillProps = {}): Promise<void>{
        const { validateValue, ...locatorProps } = fillProps; // { validateValue: true }

        await test.step(`Заполнение ${this.typeOf} "${this.componentName}" значением "${value}"`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.fill(value);

            // Проверяет, что конкретное поле содержит ожидаемое значение value
            if (validateValue) {
                await this.shouldHaveValue(value, locatorProps);
            }
        });
    }

    // Ввод текста посимвольно как пользователь, скорость по умочланию 100
    async fillTypeUser(value: string, options: TypeOptions = {}, locatorProps: LocatorProps = {}): Promise<void>{
        const {delay = 100, validateValue = false} = options;

        await test.step(`Заполнение ${this.typeOf} "${this.componentName}" значением "${value} с задержкой ввода в ${delay}млс"`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.pressSequentially(value, {delay});

            // проверяет, что конкретное поле содержит ожидаемое значение value
            if (validateValue) {
                await this.shouldHaveValue(value, locatorProps);
            }
        });

    }

    // Проверка что value имеет нужное значение
    async shouldHaveValue(value: string, locatorProps: LocatorProps = {}): Promise<void> {
        await test.step(`Проверка того, что ${this.typeOf} "${this.componentName}" имеет значение "${value}"`, async () => {
            const locator = this.getLocator(locatorProps);
            await expect(locator).toHaveValue(value);
        });
    };

    // Очистить инпут
    async clear(locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Очистка ${this.typeOf} с именем ${this.componentName}`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.fill('');
        })
    }

    // Загрзука файлов
    async setFiles(file: FilesSet, locatorProps: LocatorProps = {}): Promise<void>{
        await test.step(`Загрузка файла(ов) "${file}" в ${this.typeOf} с именем ${this.componentName}`, async () => {
            const locator = this.getLocator(locatorProps);
            await locator.setInputFiles(file)
        });
    };

}