import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Button } from "@/page-factory/button";
import { Wrapper } from "@/page-factory/wrapper";

import {
    SELECTOR_ACTIVE_TAB,
    SELECTOR_SUBTITLE_PAGE,
    SELECTOR_TITLE_PAGE,
    SELECTOR_WRAPPER_ARTICLES
} from './blog.const';


export class BlogPage extends BasePage{
    readonly url:string = '/blog/';
    readonly root:string = '.main';

    readonly titlePage: Title;
    readonly subtitlePage: Text;
    readonly tabActiveBtn: Button;
    readonly wrapperBlogArticles: Wrapper;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы h1', root: this.root});
        this.subtitlePage = new Text({page, locator: SELECTOR_SUBTITLE_PAGE, name: 'Подзаголовок страницы', root: this.root});
        this.tabActiveBtn = new Button({page, locator: SELECTOR_ACTIVE_TAB, name: 'Активный таб', root: this.root});
        this.wrapperBlogArticles = new Button({page, locator: SELECTOR_WRAPPER_ARTICLES, name: 'Обертка статей', root: this.root});
    }
}