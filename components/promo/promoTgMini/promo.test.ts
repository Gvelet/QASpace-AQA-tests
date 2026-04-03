import { searchTest as test } from "@/tests/tests";
import { promoTgMiniExpect } from "@/data/promoTgMini";

export async function componentPromoMiniTest(title:string){
    test(`Раздел "${title}" - блок promo - Блок есть на странице`, async({PromoTgMiniComponent}) => {
        await PromoTgMiniComponent.promoWrapper.shouldBeVisible();
    });

    test(`Раздел "${title}" - блок promo - заголовок верный`, async({PromoTgMiniComponent}) => {
        await PromoTgMiniComponent.promoTitle.shouldHaveText(promoTgMiniExpect.title)
    });

    test(`Раздел "${title}" - блок promo - название кнопки перехода в тг верное`, async({PromoTgMiniComponent}) => {
        await PromoTgMiniComponent.promoBtnTg.shouldHaveText(promoTgMiniExpect.nameBtn);
    });

    test(`Раздел "${title}" - блок promo - ссылка в тг верная`, async({PromoTgMiniComponent}) => {
        await PromoTgMiniComponent.promoBtnTg.checkingAttributeValue('href', promoTgMiniExpect.hrefTg);
    })
}