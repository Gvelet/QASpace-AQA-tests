import { Page } from "@playwright/test";

// Тип, который задает динамические параметры для подстановки в локатор.
export type LocatorContext = { [key: string]: string | boolean | number};

// ComponentProps — базовые свойства компонента, включая шаблон локатора.
export type ComponentProps = {
    page: Page;
    locator: string;
    name?: string;
    root?: string;
};

// LocatorProps — расширение ComponentProps, позволяющее при вызове getLocator передавать новые параметры или переопределять шаблон.
export type LocatorProps = {locator?: string} & LocatorContext
// Объединяет два типа: { locator?: string } — опциональный свойство locator, которое позволяет переопределить базовый локатор компонента при вызове getLocator.
// & LocatorContext — все ключи и значения, указанные в LocatorContext (id, isActive, label, и т.д.)..

