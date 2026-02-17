// Фикстура компонентов для удобного вызыва
import {Fixtures} from '@playwright/test';
import {ContextPagesFixture} from '@/fixtures/fixtures-context';

export type ComponentsFixture = {
    // ModalAuth: ModalAuth;
};

export const componentsFixture: Fixtures<ComponentsFixture, ContextPagesFixture> = {
    // ModalAuth: async ({contextPage}, use) => {
    //     const componentModalAuth = new ModalAuth(contextPage);

    //     await use(componentModalAuth)
    // }

}