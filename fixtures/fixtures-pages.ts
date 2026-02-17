// Фикстура страниц для удобного вызыва
import {Fixtures} from '@playwright/test';
import {ContextPagesFixture} from '@/fixtures/fixtures-context';
// import {HomePage} from '@/pages/pages-site/home-page/homePage';

export type PageFixture = {
    // HomePage: HomePage;
};

export const pageFixture: Fixtures<PageFixture, ContextPagesFixture> = {
    // HomePage: async ({contextPage}, use) => {
    //     const akvartoHomePage = new HomePage(contextPage);

    //     await use(akvartoHomePage)
    // }
}