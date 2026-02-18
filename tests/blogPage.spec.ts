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
    
    test.beforeEach(async ({BlogPage}) => {
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
});

test.describe('Страница Блога - подмена контента API', {tag: '@API'}, () => {
    
    test.beforeEach(async ({BlogPage}) => {
        await BlogPage.mockApiBlog('**/articles.json', blog15ArticlesAPI)
        await BlogPage.visit();
    });

    test('Подмена API - 15 карточек', async({BlogPage}) => {
        // 9 отображается на одной странице
        await BlogPage.blogArticlesAll.haveCount(9)
    })

    // Дописать

});

test.describe('Страница Блога - Добавить новую запись в articles', {tag: '@API'}, () => {
    test('Добавление новой карточки в блог', async({BlogPage}) => {
        await BlogPage.pushArticleBlog('**/articles.json', [newArticle]);
        await BlogPage.visit();
    })

    test('Редактирование существующей карточки в блоге', async({BlogPage}) => {
        await BlogPage.editArticleBlog('**/articles.json', 'status-kod', 'Новый отредактированный заголовок');
        await BlogPage.visit();
    })
});