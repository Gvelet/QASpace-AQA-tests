import { searchTest as test } from "./tests";
import { encryptedStatusesMock } from "@/utils/mockAPI/mockStatuses";
import { statusCodeData } from "@/data/statusCodeData";
import { statusCodeDataJson } from "@/data/statusCodeDataJson";

test.describe('Статус коды - контент', () => {
    test.beforeEach(async ({StatusCodePage}) => {
        await StatusCodePage.mockFetchStatuses('**/encrypted_statuses.json', encryptedStatusesMock)
        await StatusCodePage.visit();
    })

    test('Проверка заголовка', async ({StatusCodePage}) => {
        await StatusCodePage.titlePage.shouldHaveText(statusCodeData.titlePage)
    })

    test('Проверка описания страницы', async ({StatusCodePage}) => {
        await StatusCodePage.descriptionPage.shouldHaveText(statusCodeData.descriptionPage)
    })

    test('Плейсхолдер у инпута верный', async ({StatusCodePage}) => {
        await StatusCodePage.inputStatuses.checkingAttributeValue('placeholder', statusCodeData.placeholderInputSatuses)
    })

    test('Плейсхолдер у селекта верный', async ({StatusCodePage}) => {
        await StatusCodePage.selectDefaultOptionGroup.shouldHaveText('1xx');
    }) 
})

test.describe.fixme('Статус коды - функционал', () => { //Локатор текста добавить
    test.beforeEach(async ({StatusCodePage}) => {
        await StatusCodePage.mockFetchStatuses('**/encrypted_statuses.json', encryptedStatusesMock)
        await StatusCodePage.visit();
    })
    
    test('Валидные данные выводятся из инпута', async ({StatusCodePage}) => {
        await StatusCodePage.inputStatuses.fill('201');
        await StatusCodePage.buttonSend.click();

        await StatusCodePage.resultInfoTitle.shouldHaveText(statusCodeDataJson.status201Title)
        await StatusCodePage.resultInfoDescription.shouldHaveText(statusCodeDataJson.status201Description)
    }) 

    test('Невалидные данные выводятся из инпута', async ({StatusCodePage}) => {
        await StatusCodePage.inputStatuses.fill('645545454');
        await StatusCodePage.buttonSend.click();

        await StatusCodePage.resultInfoErrorText.shouldHaveText(statusCodeData.errorResult);
    }) 

    test('Выбрать статус из списка - группа по умолчанию', async ({StatusCodePage}) => {
        await StatusCodePage.selectCodes.selectOptionValue('100');

        await StatusCodePage.resultInfoTitle.shouldHaveText(`Статус код 100 - ${statusCodeDataJson.lotTextStatusTitle100}`)
        await StatusCodePage.resultInfoDescription.shouldHaveText(statusCodeDataJson.lotTextStatusDescription100)
    }) 

    test('Выбрать группу и статус', async ({StatusCodePage}) => {
        await StatusCodePage.selectGroup.selectOptionValue('5xx')
        await StatusCodePage.selectCodes.selectOptionValue('504');

        await StatusCodePage.resultInfoTitle.shouldHaveText(statusCodeDataJson.shortTitle504)
        await StatusCodePage.resultInfoDescription.shouldHaveText(statusCodeDataJson.shortDescription504)
    }) 
});