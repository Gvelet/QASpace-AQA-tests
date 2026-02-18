import { expect } from '@playwright/test';
import { searchTest as test } from './tests';
import { homePageExpect } from '@/data/homePage';
import { componentPromoMiniTest } from '@/components/promo/promoTgMini/promo.test';

test.describe('Главная страница - метатеги', {tag: '@meta'}, () => {

    const {metaTitle, metaDesc, ogTitle} = homePageExpect.meta;

    test.beforeEach(async ({HomePage}) => {
        await HomePage.visit();
    });

    test('Провека title страницы', {tag: '@smoke'}, async({contextPage}) => {
        await expect(contextPage).toHaveTitle(metaTitle);
    });

    test('Провека description страницы', {tag: '@smoke'}, async({HomePage, contextPage}) => {
        await HomePage.checkDescriptionPageMeta(contextPage, metaDesc)
    });

    test('Провека OGtitle страницы', async({HomePage, contextPage}) => {
        await HomePage.checkOGTitlePageMeta(contextPage, ogTitle)
    })


})

test.describe('Главная страница - промо телеграм', {tag: ['@promo', '@smoke']}, () => {
    test.beforeEach(async ({HomePage}) => {
        await HomePage.visit();
    });

    componentPromoMiniTest('Главная страница')
})

test.describe('Главная страница - контент', () => {
    const {titlePage, subtitlePage, titlePopularBlog} = homePageExpect.page;
    
    test.beforeEach(async ({HomePage}) => {
        await HomePage.visit();
    });

    test('url страницы верный', async({HomePage}) => {
        await HomePage.urlCheckRegex();
    })

    test('Заголовок h1 верный', async({HomePage}) => {
        await HomePage.titlePage.shouldHaveText(titlePage);
    })

    test('Подзаголовок под h1 верный', async({HomePage}) => {
        await HomePage.subtitlePage.shouldHaveText(subtitlePage);
    })

    test('Заголовок в топ статьях верный', async({HomePage}) => {
        await HomePage.titlePopularBlog.shouldHaveText(titlePopularBlog);
    })

    test('При клике на кнопку добавляется якорь', async({HomePage}) => {
        await HomePage.possibilitiesBtn.click();
        await HomePage.urlCheck('#possibilities');
    });

    test('В блоке топ статей - кол-во карточек 3', async({HomePage}) => {
        await HomePage.wrapperSliderBlog.haveCount(3);
    });
})