import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Link } from "@/page-factory/link";

import {
    SELECTOR_INSTRUMENTS_RESIZE_LINK,
    SELECTOR_INSTRUMENTS_STATUSCODE_LINK,
    SELECTOR_SUBTITLE_PAGE,
    SELECTOR_TITLE_PAGE
} from './instruments.const';


export class InstrumentsPage extends BasePage{
    readonly url:string = '/blog/';
    readonly root:string = '.main';

    readonly titlePage: Title;
    readonly subtitlePage: Text;
    readonly cardResizeLink: Link;
    readonly cardStatusCodeLink: Link;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы h1', root: this.root});
        this.subtitlePage = new Text({page, locator: SELECTOR_SUBTITLE_PAGE, name: 'Подзаголовок страницы', root: this.root});
        this.cardResizeLink = new Link({page, locator: SELECTOR_INSTRUMENTS_RESIZE_LINK, name: 'Карточка "Поменять разрешение фото"', root: this.root});
        this.cardStatusCodeLink = new Link({page, locator: SELECTOR_INSTRUMENTS_STATUSCODE_LINK, name: 'Карточка "Узнать статус код"', root: this.root});
    }
}