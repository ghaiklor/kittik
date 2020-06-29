import { MarkdownParser } from '../src/MarkdownParser';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const DECK_PATH = resolve(__dirname, 'deck.md');
const DECK = readFileSync(DECK_PATH).toString();

new MarkdownParser()
  .parse(DECK)
  .render()
  .catch(console.error);
