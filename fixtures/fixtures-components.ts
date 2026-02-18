// Фикстура компонентов для удобного вызыва
import {Fixtures} from '@playwright/test';
import {ContextPagesFixture} from '@/fixtures/fixtures-context';
import { PromoTgBigComponent } from '@/components/promo/ptomoTgBig/promo';
import { PromoTgMiniComponent } from '@/components/promo/promoTgMini/promoMini';
import { NavbarHeaderDesc } from '@/components/navigation/navbarHeaderDesc';

export type ComponentsFixture = {
    PromoTgBigComponent: PromoTgBigComponent;
    PromoTgMiniComponent: PromoTgMiniComponent;
    NavbarHeaderDesc: NavbarHeaderDesc;
};

export const componentsFixture: Fixtures<ComponentsFixture, ContextPagesFixture> = {
    PromoTgBigComponent: async ({contextPage}, use) => {
        const componentPromoTgBig = new PromoTgBigComponent(contextPage);

        await use(componentPromoTgBig)
    },

    PromoTgMiniComponent: async ({contextPage}, use) => {
        const componentPromoTgMini = new PromoTgMiniComponent(contextPage);

        await use(componentPromoTgMini)
    },

    NavbarHeaderDesc: async ({contextPage}, use) => {
        const componentNavbar = new NavbarHeaderDesc(contextPage);

        await use(componentNavbar)
    },
}