import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { searchPages } from '../src/lib/siteSearch';

test('search matches body content, ignores accents and case, and requires every keyword', () => {
  const pages = [
    { url: '/a/', title: 'Community', text: 'Minnesota emerald green burgundy gold', locale: 'en' },
    { url: '/fr-ca/b/', title: 'Prévention', text: 'Santé et communauté', locale: 'fr-CA' },
  ];
  assert.equal(searchPages(pages, 'MINNESOTA gold', 'en')[0]?.url, '/a/');
  assert.equal(searchPages(pages, 'prevention sante', 'fr-CA')[0]?.url, '/fr-ca/b/');
  assert.equal(searchPages(pages, 'Minnesota missing', 'en').length, 0);
  assert.equal(searchPages(pages, '   ', 'en').length, 0);
  assert.equal(searchPages(pages, '???', 'en').length, 0);
});

test('title matches rank ahead of body matches', () => {
  const pages = [
    { url: '/a/', title: 'Other', text: 'Golf event', locale: 'en' },
    { url: '/b/', title: 'Golf', text: 'Tournament', locale: 'en' },
  ];
  assert.equal(searchPages(pages, 'golf', 'en')[0]?.url, '/b/');
});

test('built index covers real English and French content without shared navigation', () => {
  const pages = JSON.parse(readFileSync('out/search-index.json', 'utf8'));
  assert.ok(pages.some((page: { locale: string }) => page.locale === 'fr-CA'));
  assert.ok(searchPages(pages, 'Minnesota', 'en').some(page => page.url === '/32-wishes/'));
  assert.ok(searchPages(pages, 'golf', 'en').some(page => page.url === '/golf-tournament/'));
  assert.ok(pages.some((page: { url: string }) => page.url === '/service-areas/'));
  assert.ok(!pages.some((page: { url: string }) => page.url.includes('404')));
});
