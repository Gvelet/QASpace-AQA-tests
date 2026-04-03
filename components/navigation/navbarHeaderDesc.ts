import {Page} from '@playwright/test';
import {Link} from '@/page-factory/link';

import {
    SELECTOR_LINK_ANALIZ,
    SELECTOR_LINK_BLOG,
    SELECTOR_LINK_INSTRUMENTS,
    SELECTOR_LINK_PRACTICES,
    SELECTOR_LINK_TEST
} from './navbar.const'

export class NavbarHeaderDesc {
    readonly root:string;

    private readonly linkAnaliz: Link;
    private readonly linkBlog: Link;
    private readonly linkInstruments: Link;
    private readonly linkPractices: Link;
    private readonly linkTests: Link;

    constructor(page: Page, root?:string){
        this.root = root || '.menu';

        this.linkAnaliz = new Link({page, locator: SELECTOR_LINK_ANALIZ, name: 'Ссылка на страницу "Анализ данных"', root: this.root});
        this.linkBlog = new Link({page, locator: SELECTOR_LINK_BLOG, name: 'Ссылка на страницу "Блог"', root: this.root});
        this.linkInstruments = new Link({page, locator: SELECTOR_LINK_INSTRUMENTS, name: 'Ссылка на страницу "Инструменты"', root: this.root});
        this.linkPractices = new Link({page, locator: SELECTOR_LINK_PRACTICES, name: 'Ссылка на страницу "Практика"', root: this.root});
        this.linkTests = new Link({page, locator: SELECTOR_LINK_TEST, name: 'Ссылка на страницу "Тесты"', root: this.root});
    }

    async clickAnalizLink():Promise<void>{
        await this.linkAnaliz.click();
    }

    async clickBlogLink():Promise<void>{
        await this.linkBlog.click();
    }

    async clickInstrumentsLink():Promise<void>{
        await this.linkInstruments.click();
    }

    async clickPracticesLink():Promise<void>{
        await this.linkPractices.click();
    }

    async clickTestsLink():Promise<void>{
        await this.linkTests.click();
    }
}