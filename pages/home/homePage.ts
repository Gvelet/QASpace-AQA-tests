import { Page, expect } from "@playwright/test";
import { BasePage } from "../base-page";
import { Button } from "@/page-factory/button";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Wrapper } from "@/page-factory/wrapper";

import {
    SELECTOR_POSSIBILITIES_BTN,
    SELECTOR_SUBTITLE_PAGE,
    SELECTOR_TITLE_PAGE,
    SELECTOR_TITLE_POPULAR_BLOG,
    SELECTOR_WRAPPER_SLIDER_BLOG
} from './homePage.const';


export class HomePage extends BasePage{
    readonly url:string = '/';
    readonly root:string = '.main';

    readonly titlePage: Title;
    readonly subtitlePage: Text;
    readonly possibilitiesBtn: Button;
    readonly titlePopularBlog: Title;
    readonly wrapperSliderBlog: Wrapper;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы h1', root: this.root});
        this.subtitlePage = new Text({page, locator: SELECTOR_SUBTITLE_PAGE, name: 'Подзаголовок страницы', root: this.root});
        this.possibilitiesBtn = new Button({page, locator: SELECTOR_POSSIBILITIES_BTN, name: 'Кнопка "Возможности"', root: this.root});
        this.titlePopularBlog = new Title({page, locator: SELECTOR_TITLE_POPULAR_BLOG, name: 'Заголовок блока "Популярные статьи"', root: this.root});
        this.wrapperSliderBlog = new Title({page, locator: SELECTOR_WRAPPER_SLIDER_BLOG, name: 'Обертка слайдов "Популярные статьи"', root: this.root});
    }
}