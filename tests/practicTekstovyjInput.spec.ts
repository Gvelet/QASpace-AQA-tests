import {searchTest as test} from './tests';
import { practicTextInputData } from '@/data/practicTextInput';

test.describe('Проверка кейсов из практики', () => {
    const {cases, casesResult} = practicTextInputData
    test.beforeEach(async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.visit();
    })

    test('все кейсы/счетчик/результат', async ({PracticTekstovyjInput}) => {
        let count = 0;
        for (const key of Object.keys(cases)) {
            await PracticTekstovyjInput.checkCase(cases[key as keyof typeof cases ], casesResult[key as keyof typeof casesResult]);
            count++
            await PracticTekstovyjInput.textResultCounter.shouldHaveText(`${count}/13`)
        }
    });

    test('Сброс прогресса после обновления страницы', async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.checkCase(cases.cyrillicCase, casesResult.cyrillicCase);

        await PracticTekstovyjInput.reload();
        await PracticTekstovyjInput.inputText.shouldHaveText('');
        await PracticTekstovyjInput.textResultCounter.shouldHaveText('0/13')
    })
});

test.describe('Проверка контента страницы', () => {
    test.beforeEach(async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.visit();
    });

    test('Заголовок страницы верный', async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.titlePage.shouldHaveText(practicTextInputData.titlePage)
    })

    test('Описание страницы верное', async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.descriptionPage.shouldHaveText(practicTextInputData.descriptionPage)
    })

    test('По умолчанию счетчик на нуле', async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.textResultCounter.shouldHaveText('0/13');
    })

    test('placeholder и инпута верный', async ({PracticTekstovyjInput}) => {
        await PracticTekstovyjInput.inputText.checkingAttributeValue('placeholder', practicTextInputData.placeholderInput);
    })
})