//combineFixtures, объединяет несколько объектов Fixtures в один.
import { Fixtures } from '@playwright/test';

export const combineFixtures = (...args: Fixtures[]): Fixtures =>
args.reduce((acc, fixture) => ({ ...acc, ...fixture }), {});
