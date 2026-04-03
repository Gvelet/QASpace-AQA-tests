import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Button } from "@/page-factory/button";
import { Wrapper } from "@/page-factory/wrapper";
import { BlogArticle } from "@/types/API/blogArticleMock";

import {
    SELECTOR_ACTIVE_TAB,
    SELECTOR_SUBTITLE_PAGE,
    SELECTOR_TITLE_PAGE,
    SELECTOR_ARTICLES_ALL,
    SELECTOR_ACTIVE_PAGINATION_BTN,
    SELECTOR_ALL_TAB_BTN,
    SELECTOR_CARDS_CATEGORY,
    SELECTOR_PAGINATION_BTN_TWO,
    SELECTOR_TEST_TAB,
    SELECTOR_CARD_ONE_DESCRIPTION,
    SELECTOR_CARD_ONE_TITLE
} from './blog.const';


export class BlogPage extends BasePage{
    readonly url:string = '/blog/';
    readonly root:string = '.main';

    readonly titlePage: Title;
    readonly subtitlePage: Text;
    readonly tabActiveBtn: Button;
    readonly blogArticlesAll: Wrapper;
    readonly activePaginationBtn: Button;
    readonly tabBtnAll: Button;
    readonly categoriesAllCards: Text;
    readonly paginationTwoBtn: Button;
    readonly tabBtnTest: Button;
    readonly сardTitle: Text;
    readonly сardDesc: Text;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы h1', root: this.root});
        this.subtitlePage = new Text({page, locator: SELECTOR_SUBTITLE_PAGE, name: 'Подзаголовок страницы', root: this.root});
        this.tabActiveBtn = new Button({page, locator: SELECTOR_ACTIVE_TAB, name: 'Активный таб', root: this.root});
        this.blogArticlesAll = new Button({page, locator: SELECTOR_ARTICLES_ALL, name: 'Все карточки', root: this.root});
        this.activePaginationBtn = new Button({page, locator: SELECTOR_ACTIVE_PAGINATION_BTN, name: 'Активный таб', root: this.root});
        this.tabBtnAll = new Button({page, locator: SELECTOR_ALL_TAB_BTN, name: 'таб по умолчанию "Все"', root: this.root});
        this.categoriesAllCards = new Button({page, locator: SELECTOR_CARDS_CATEGORY, name: 'Категории карточек', root: this.root});
        this.paginationTwoBtn = new Button({page, locator: SELECTOR_PAGINATION_BTN_TWO, name: 'кнопка второй страницы', root: this.root});
        this.tabBtnTest = new Button({page, locator: SELECTOR_TEST_TAB, name: 'Тестовый таб для проверок', root: this.root});
        this.сardTitle = new Text({page, locator: SELECTOR_CARD_ONE_TITLE, name: 'Заголовок карточки', root: this.root});
        this.сardDesc = new Text({page, locator: SELECTOR_CARD_ONE_DESCRIPTION, name: 'Описание карточки', root: this.root});
        
    }

    async mockApiBlog(url:string, mockArr: BlogArticle[]){
        await this.page.route(url, async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                json: mockArr
            })
        })
    }

    async pushArticleBlog(url:string, mockArr: BlogArticle[]){
        await this.page.route(url, async route => {
            const response = await route.fetch();
            const articles = await response.json() as Array<any>;

            articles.push(...mockArr);

            await route.fulfill({
                response,
                json: articles
            })
        })
    }

    async editArticleBlog(url:string, articleSlug:string, editTitle:string){
        await this.page.route(url, async route => {
            const response = await route.fetch();
            const articles = await response.json();

            const modification = articles.find(article => article.slug == articleSlug);

            if(modification){
                modification.title = editTitle; 
            };

            await route.fulfill({
                response,
                json: articles
            })
        })
    }
}