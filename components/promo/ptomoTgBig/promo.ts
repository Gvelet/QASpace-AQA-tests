import { Page } from "@playwright/test";
import { Title } from "@/page-factory/title"; 
import { Text } from "@/page-factory/text";
import { Link } from "@/page-factory/link";

import {
    SELECTOR_LINK_TG,
    SELECTOR_TEXT,
    SELECTOR_TITLE
} from './promo.const';

export class PromoTgBigComponent{
    readonly root: string;
    readonly promoTitle: Title;
    readonly promoText: Text;
    readonly promoLinkTg: Link;

    constructor(page: Page, root?: string){
        this.root = root;
        this.promoTitle = new Title({page, locator: SELECTOR_TITLE, name: 'Заголовок промо', root: this.root});
        this.promoText = new Text({page, locator: SELECTOR_TEXT, name: 'Текст под заголовком', root: this.root});
        this.promoLinkTg = new Link({page, locator: SELECTOR_LINK_TG, name: 'Ссылка на канал в тг', root: this.root});
    }
}