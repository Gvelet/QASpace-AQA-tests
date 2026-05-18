import { Page } from "@playwright/test";
import { BasePage } from "@/pages/base-page";
import { Button } from "@/page-factory/button";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import { Select } from "@/page-factory/select";
import { Input } from "@/page-factory/input";
import { HttpStatusesResponse } from "@/types/API/statusCodeMock";
import { encryptedStatusesMock } from "@/utils/mockAPI/mockStatuses";

import {
    SELECTOR_DESCRIPTION_PAGE,
    SELECTOR_INPUT,
    SELECTOR_SELECT_CODES,
    SELECTOR_SELECT_GROUPS,
    SELECTOR_SUBMIT_BTN,
    SELECTOR_TITLE_PAGE,
    SELECTOR_RESULT_ERROR,
    SELECTOR_RESULT_TEXT,
    SELECTOR_RESULT_TITLE,
    SELECTOR_SELECT_DEFAULT,
    SELECTOR_SELECT_GROUPS_DEFAULT
} from './statusСode.const'

export class StatusCodePage extends BasePage{
    readonly url:string = '/instruments/status-kod';
    readonly root:string = '.statuses'

    readonly titlePage: Title;
    readonly descriptionPage: Text;
    readonly inputStatuses: Input;
    readonly buttonSend: Button;
    readonly selectGroup: Select;
    readonly selectCodes: Select;
    readonly resultInfoTitle: Text;
    readonly resultInfoDescription: Text;
    readonly resultInfoErrorText: Text;
    readonly selectDefaultOption: Text;
    readonly selectDefaultOptionGroup: Text;

    constructor(public page: Page){
        super(page);

        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы', root: this.root});
        this.descriptionPage = new Text({page, locator: SELECTOR_DESCRIPTION_PAGE, name: 'Описание страницы', root: this.root});
        this.inputStatuses = new Input({page, locator: SELECTOR_INPUT, name: 'поле ввода статусов', root: this.root});
        this.buttonSend = new Button({page, locator: SELECTOR_SUBMIT_BTN, name: 'кнопка отправки', root: this.root});
        this.selectGroup = new Select({page, locator: SELECTOR_SELECT_GROUPS, name: 'Выбор группы статусов', root: this.root});
        this.selectCodes = new Select({page, locator: SELECTOR_SELECT_CODES, name: 'Выбор статуса', root: this.root});

        this.resultInfoTitle = new Text({page, locator: SELECTOR_RESULT_TITLE, name: 'заголовок результата статусов', root: this.root});
        this.resultInfoDescription = new Text({page, locator: SELECTOR_RESULT_TEXT, name: 'текст результата статусов', root: this.root});
        this.resultInfoErrorText = new Text({page, locator: SELECTOR_RESULT_ERROR, name: 'текст что результатов не найдено', root: this.root});
        this.selectDefaultOption = new Text({page, locator: SELECTOR_SELECT_DEFAULT, name: 'Селект статусов по умолчанию', root: this.root});
        this.selectDefaultOptionGroup = new Text({page, locator: SELECTOR_SELECT_GROUPS_DEFAULT, name: 'селект группы по умолчанию', root: this.root});

    }

    async mockFetchStatuses(url:string, jsonMock: string){
        await this.page.route(url, async route =>{
            await route.fulfill({
                status: 200,
                contentType: 'text/plain',
                body: jsonMock
            });
        })
    }
}