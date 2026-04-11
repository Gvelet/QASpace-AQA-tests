import { expect, Page } from "@playwright/test";
import { Input } from "@/page-factory/input";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { BasePage } from "@/pages/base-page";
import { Button } from "@/page-factory/button";

import {
    SELECTOR_PRACTIC_COUNTER,
    SELECTOR_PRACTIC_INPUT,
    SELECTOR_PRACTIC_RESULT_INFO,
    SELECTOR_PRACTIC_SEND,
    SELECTOR_PRACTIC_LAST_CASE,
    SELECTOR_DESCRIPTION_PAGE,
    SELECTOR_TITLE_PAGE
} from './tekstovyjInput.const'


export class PracticTekstovyjInput extends BasePage{
    readonly url:string = '/practices/tekstovyj-input';
    readonly root:string = '.practic';

    readonly inputText: Input;
    readonly btnSend: Button;
    readonly textResultCounter: Text;
    readonly allResultCases: Text;
    readonly titlePage: Title;
    readonly descriptionPage: Text;

    constructor(public page: Page){
        super(page);

        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы', root: this.root});
        this.descriptionPage = new Text({page, locator: SELECTOR_DESCRIPTION_PAGE, name: 'Описание страницы', root: this.root});
        this.inputText = new Input({page, locator: SELECTOR_PRACTIC_INPUT, name: 'Инпут для ввода кейса', root: this.root});
        this.btnSend = new Button({page, locator: SELECTOR_PRACTIC_SEND, name: 'Кнопка отправки кейса', root: this.root});
        this.textResultCounter = new Text({page, locator: SELECTOR_PRACTIC_COUNTER, name: 'Счетчик найденных кейсов', root: this.root});
        this.allResultCases = new Text({page, locator: SELECTOR_PRACTIC_LAST_CASE, name: 'Найденные кейсы', root: this.root});
    }

    async checkCase(inputTextCase:string, expectResultCase:string):Promise<void>{
        await this.inputText.fill(inputTextCase);
        await this.btnSend.click();
        await this.allResultCases.shouldHavePartText(expectResultCase);
    }
}