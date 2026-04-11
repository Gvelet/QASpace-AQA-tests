 import { Page } from "@playwright/test";
 import { BasePage } from "@/pages/base-page";
 import { Text } from "@/page-factory/text";
 import { Input } from "@/page-factory/input";

 import {
    SELECTOR_TEXTAREA,
    SELECTOR__COUNTER_CHARS,
    SELECTOR__COUNTER_CYRILLIC,
    SELECTOR__COUNTER_DIGIT,
    SELECTOR__COUNTER_LATIN,
    SELECTOR__COUNTER_NOSPACES,
    SELECTOR__COUNTER_SPECIAL,
    SELECTOR__COUNTER_WORDS
 } from './counter.const';

 export class CounterPage extends BasePage{
    readonly url:string = '/analiz-dannyh/podschet-simvolov';
    readonly root:string = '.main'
    
    readonly counterTextarea: Input;
    readonly counterChars: Text;
    readonly counterCyrillic: Text;
    readonly counterDigit: Text;
    readonly counterLatin: Text;
    readonly counterNospaces: Text;
    readonly counterSpecial: Text;
    readonly counterWords: Text;

    constructor(public page: Page){
        super(page);

        this.counterTextarea = new Input({page, locator: SELECTOR_TEXTAREA, name: 'Поле ввода', root: this.root});
        this.counterChars = new Text({page, locator: SELECTOR__COUNTER_CHARS, name: 'Всего символов', root: this.root});
        this.counterCyrillic == new Text({page, locator: SELECTOR__COUNTER_CYRILLIC, name: 'Кириллических символов', root: this.root});
        this.counterDigit == new Text({page, locator: SELECTOR__COUNTER_DIGIT, name: 'Всего цифр', root: this.root});
        this.counterLatin == new Text({page, locator: SELECTOR__COUNTER_LATIN, name: 'Латинских символов', root: this.root});
        this.counterNospaces == new Text({page, locator: SELECTOR__COUNTER_NOSPACES, name: 'Без пробелов', root: this.root});
        this.counterSpecial == new Text({page, locator: SELECTOR__COUNTER_SPECIAL, name: 'Спец. символы', root: this.root});
        this.counterWords == new Text({page, locator: SELECTOR__COUNTER_WORDS, name: 'Всего слов', root: this.root});
    }

 }