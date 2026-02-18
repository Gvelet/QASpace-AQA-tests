import { test } from '@playwright/test';
import { combineFixtures } from '@/utils/fixtures';
import { PageFixtures, pageFixtures } from '@/fixtures/fixtures-pages';
import { ContextPagesFixture, contextPagesFixture } from '@/fixtures/fixtures-context';
import { ComponentsFixture, componentsFixture } from '@/fixtures/fixtures-components';

export const searchTest = test.extend<PageFixtures & ContextPagesFixture & ComponentsFixture>( 
  combineFixtures(pageFixtures, contextPagesFixture, componentsFixture) 
);
