import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Link } from "@/page-factory/link";

import {
    SELECTOR_SUBTITLE_PAGE,
    SELECTOR_TITLE_PAGE,
    SELECTOR_INSTRUMENTS_COUNTER_LINK,
    SELECTOR_INSTRUMENTS_GENERATOR_LINK,
    SELECTOR_INSTRUMENTS_VALIDATOR_LINK
} from './analiz.const';


export class AnalizDataPage extends BasePage{
    readonly url:string = '/blog/';
    readonly root:string = '.main';

    readonly titlePage: Title;
    readonly subtitlePage: Text;
    readonly cardCounterLink: Link;
    readonly cardGeneratorLink: Link;
    readonly cardValidatorLink: Link;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы h1', root: this.root});
        this.subtitlePage = new Text({page, locator: SELECTOR_SUBTITLE_PAGE, name: 'Подзаголовок страницы', root: this.root});
        this.cardCounterLink = new Link({page, locator: SELECTOR_INSTRUMENTS_COUNTER_LINK, name: 'Карточка "Подсчет символов"', root: this.root});
        this.cardGeneratorLink = new Link({page, locator: SELECTOR_INSTRUMENTS_GENERATOR_LINK, name: 'Карточка "Генератор текста"', root: this.root});
        this.cardValidatorLink = new Link({page, locator: SELECTOR_INSTRUMENTS_VALIDATOR_LINK, name: 'Карточка "Валидатор JSON"', root: this.root});

    }
}