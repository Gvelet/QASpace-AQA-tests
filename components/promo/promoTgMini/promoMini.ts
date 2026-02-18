import { Page } from "@playwright/test";
import { Title } from "@/page-factory/title"; 
import { Button } from "@/page-factory/button";
import { Wrapper } from "@/page-factory/wrapper";

import {
    SELECTOR_BTN_TG,
    SELECTOR_TITLE,
    SELECTOR_WRAPPER_PROMO_MINI
} from './promoMini.const';

export class PromoTgMiniComponent{
    readonly root: string;
    readonly promoTitle: Title;
    readonly promoBtnTg: Button;
    readonly promoWrapper: Wrapper;

    constructor(page: Page, root?: string){
        this.root = root;
        this.promoTitle = new Title({page, locator: SELECTOR_TITLE, name: 'Заголовок промо', root: this.root});
        this.promoBtnTg = new Button({page, locator: SELECTOR_BTN_TG, name: 'Ссылка на канал в тг', root: this.root});
        this.promoWrapper = new Button({page, locator: SELECTOR_WRAPPER_PROMO_MINI, name: 'Обертка для промо', root: this.root});
    }
}