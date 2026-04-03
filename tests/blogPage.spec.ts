import { expect } from '@playwright/test';
import { searchTest as test } from './tests';
import { blogPageExpect } from '@/data/blogPage';
import { blog15ArticlesAPI, newArticle } from '@/utils/mockAPI/mockBlog';

test.describe('Страница Блога - метатеги', {tag: '@meta'}, () => {

    const {metaTitle, metaDesc} = blogPageExpect.meta;

    test.beforeEach(async ({BlogPage}) => {
        await BlogPage.visit();
    });

    test('Провека title страницы', {tag: '@smoke'}, async({contextPage}) => {
        await expect(contextPage).toHaveTitle(metaTitle);
    });

    test('Провека description страницы', {tag: '@smoke'}, async({BlogPage, contextPage}) => {
        await BlogPage.checkDescriptionPageMeta(contextPage, metaDesc)
    });

});

test.describe('Страница Блога - контент', () => {
    const {titlePage, subtitlePage} = blogPageExpect.page;
    const {title, description, category} = blogPageExpect.card;
    
    test.beforeEach(async ({BlogPage}) => {
        await BlogPage.pushArticleBlog('**/articles.json', [newArticle])
        await BlogPage.visit();
    });

    test('url страницы верный', async({BlogPage}) => {
        await BlogPage.urlCheckRegex();
    })

    test('Заголовок h1 верный', async({BlogPage}) => {
        await BlogPage.titlePage.shouldHaveText(titlePage);
    })

    test('Подзаголовок под h1 верный', async({BlogPage}) => {
        await BlogPage.subtitlePage.shouldHaveText(subtitlePage);
    });

    test('Карточек больше или равно 3', async({BlogPage}) => {
        await BlogPage.blogArticlesAll.haveCountAbsolute(3)
    })

    test('Контент у карточки верный', async({BlogPage}) => {
        await BlogPage.сardTitle.shouldHaveText(title)
        await BlogPage.сardDesc.shouldHaveText(description)
    })
});

test.describe('Страница Блога - функционал', {tag: '@API'}, () => {

    const {defaultTabName, testTabName} = blogPageExpect.page;
    
    test.beforeEach(async ({BlogPage}) => {
        await BlogPage.mockApiBlog('**/articles.json', blog15ArticlesAPI)
        await BlogPage.visit();
    });

    test('Карточек на одной странице - 9', async({BlogPage}) => {
        // 9 отображается на одной странице
        await BlogPage.blogArticlesAll.haveCount(9)
    })

    test('По умолчанию таб "Все"', async({BlogPage}) => {
        await BlogPage.tabActiveBtn.shouldHaveText(defaultTabName)
    })

    test.only('На отдельном табе свои карточки', async({BlogPage}) => {
        await BlogPage.tabBtnTest.click();
        await BlogPage.categoriesAllCards.haveCountAbsolute(1);

        const texts = await BlogPage.categoriesAllCards.allTexts();

        for(const text of texts) {
            expect(text).toBe(testTabName)
        }

    })

    test('Пагинация переключает на 2-ую страницу', async({BlogPage}) => {
        await BlogPage.paginationTwoBtn.click();

        await BlogPage.activePaginationBtn.shouldHaveText('2');
        await BlogPage.expectPageParam(2);
    })

}); 