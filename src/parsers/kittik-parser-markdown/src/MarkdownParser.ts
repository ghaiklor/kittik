import { Deck } from 'kittik';
import { Root } from 'mdast'; // eslint-disable-line node/no-missing-import
import frontmatter from 'remark-frontmatter';
import inspect from 'unist-util-inspect';
import markdown from 'remark-parse';
import unified from 'unified';

export class MarkdownParser {
  // eslint-disable-next-line class-methods-use-this
  public parse (source: string): Deck {
    const tree = unified()
      .use(markdown)
      .use(frontmatter, ['yaml'])
      .parse(source) as Root;

    console.log(inspect(tree));

    return new Deck();
  }
}
