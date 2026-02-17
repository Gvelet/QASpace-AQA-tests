import { LocatorContext } from "@/types/page-factory/component"; 

// Эта функция предназначена для динамической генерации локаторов (селекторов) на основе шаблонов и переданных параметров.
export const locatorTemplateFormat = (locator: string, { ...context}: LocatorContext): string => {
    let template = locator; // исходный шаблон локатора 

    for(const [key, value] of Object.entries(context)){ // перебираем все параметры из context
        template = template.replace(`${key}`, value.toString()); // заменяем каждый плейсхолдер на значение
    }

    return template; // возвращаем сформированный локатор
}

// Пример работы
// locator: строка-шаблон, например: //div[@data-id="{id}"].
// context: объект с ключами и значениями, например: { id: 123 }.
// Итог: "//div[@data-id=\"123\"]"