// Фикстура страниц для удобного вызыва
import {Fixtures} from '@playwright/test';
import {contextPagesFixture, ContextPagesFixture} from '@/fixtures/fixtures-context';
import { HomePage } from '@/pages/home/homePage';
import { BlogPage } from '@/pages/blog/blog';
import { InstrumentsPage } from '@/pages/instruments/instruments';
import { AnalizDataPage } from '@/pages/analiz/analiz';
import { CounterPage } from '@/pages/analiz/counter/counter';

export type PageFixtures = {
    HomePage: HomePage;
    BlogPage: BlogPage;
    InstrumentsPage: InstrumentsPage;
    AnalizDataPage: AnalizDataPage;
    CounterPage: CounterPage;
};

export const pageFixtures: Fixtures<PageFixtures, ContextPagesFixture> = {
    HomePage: async ({contextPage}, use) => {
        const homePage = new HomePage(contextPage);

        await use(homePage)
    },

    BlogPage: async ({contextPage}, use) => {
        const blogPage = new BlogPage(contextPage);

        await use(blogPage)
    },

    InstrumentsPage: async ({contextPage}, use) => {
        const instrumentsPage = new InstrumentsPage(contextPage);

        await use(instrumentsPage)
    },

    AnalizDataPage: async ({contextPage}, use) => {
        const analizDataPage = new AnalizDataPage(contextPage);

        await use(analizDataPage)
    },

    CounterPage: async ({contextPage}, use) => {
        const counterPage = new CounterPage(contextPage);

        await use(counterPage)
    }
}