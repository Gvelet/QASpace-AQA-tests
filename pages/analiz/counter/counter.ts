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

        this.counterTextarea = new Input({page, locator: SELECTOR_TEXTAREA, name: 'Поле ввода', root: this.root})
        this.counterChars = new Text({page, locator: SELECTOR__COUNTER_CHARS, name: 'всего символов', root: this.root})
    }

 }