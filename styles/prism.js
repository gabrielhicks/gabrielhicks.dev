import { css } from '@emotion/react';
import { theme } from '@chakra-ui/react';

// export const prismDarkTheme = css`
//   code {
//     white-space: pre;
//   }
//   code[class*='language-'],
//   pre[class*='language-'] {
//     color: #6089b4;
//     ${'' /* color: #C5C8C6  white*/}
//     background: none;
//     text-shadow: none;
//     font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
//     font-size: 1em;
//     text-align: left;
//     white-space: pre;
//     word-spacing: normal;
//     word-break: normal;
//     word-wrap: normal;
//     line-height: 1.5;

//     -moz-tab-size: 4;
//     -o-tab-size: 4;
//     tab-size: 4;

//     -webkit-hyphens: none;
//     -moz-hyphens: none;
//     -ms-hyphens: none;
//     hyphens: none;
//   }

//   @media print {
//     code[class*='language-'],
//     pre[class*='language-'] {
//       text-shadow: none;
//     }
//   }

//   pre[class*='language-'],
//   :not(pre) > code[class*='language-'] {
//     background: #1c1c1c;
//   }

//   /* Code blocks */
//   pre[class*='language-'] {
//     padding: 1em;
//     margin: 0.5em 0;
//     overflow: auto;
//     border: 0.3em solid hsl(30, 20%, 40%);
//     border-radius: 0.5em;
//     box-shadow: 1px 1px 0.5em black inset;
//   }

//   /* Inline code */
//   :not(pre) > code[class*='language-'] {
//     padding: 0.15em 0.2em 0.05em;
//     border-radius: 0.3em;
//     border: 0.13em solid hsl(30, 20%, 40%);
//     box-shadow: 1px 1px 0.3em -0.1em black inset;
//     white-space: normal;
//   }

//   .token.arrow.operator {
//     color: #6089b4;
//   }

//   .token.known-class-name.classname {
//     color: #2b91af;
//   }

//   .token.maybe-class-name {
//     color: #ce6700;
//   }

//   .token.property-access {
//     color: #9872a2;
//   }

//   .token.method.property-access {
//     color: #9872a2;
//   }

//   .token.method.function.property-access {
//     color: #ce6700;
//   }

//   .token.maybe-class-name {
//     color: #6089b4;
//   }

//   .token.function .maybe-class-name {
//     color: #ce6700;
//   }

//   .token.function {
//     color: #ce6700;
//   }

//   .token.class-name {
//     color: #c7444a;
//   }

//   .token.comment,
//   .token.prolog,
//   .token.doctype,
//   .token.operator,
//   .token.cdata {
//     color: #393a34;
//   }

//   .token.punctuation,
//   .token.attr-name {
//     color: #d0b344;
//   }

//   .token.namespace {
//     opacity: 0.7;
//   }

//   .token.tag {
//     color: #6089b4;
//   }

//   .token.property,
//   .token.boolean,
//   .token.number,
//   .token.constant,
//   .token.symbol {
//     color: #6089b4;
//   }

//   .token.selector,
//   .token.string,
//   .token.char,
//   .token.builtin,
//   .token.inserted {
//     color: #9aa83a;
//   }

//   .token.entity,
//   .token.url,
//   .language-css .token.string,
//   .style .token.string,
//   .token.variable {
//     color: #9872a2;
//   }

//   .token.attr-value {
//     color: #9aa83a;
//   }

//   .token.atrule,
//   .token.keyword {
//     color: #9872a2;
//   }

//   .token.regex,
//   .token.important {
//     color: #e90;
//   }

//   .token.important,
//   .token.bold {
//     font-weight: bold;
//   }
//   .token.italic {
//     font-style: italic;
//   }

//   .token.entity {
//     cursor: help;
//   }

//   .token.deleted {
//     color: red;
//   }
// `;

// export const prismLightTheme = prismDarkTheme;

const prismBaseTheme = css`
  code {
    white-space: pre;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
    background: none;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes[2]};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights[2]};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[50]};
    border: 1px solid ${theme.colors.gray[200]};
    border-radius: ${theme.radii.lg};
  }
  /* Inline code */
  :not(pre) > code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    border: 1px solid ${theme.colors.gray[200]};
    border-radius: ${theme.radii.lg};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }
  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[200]};
    border-top-left-radius: ${theme.radii.lg};
    border-top-right-radius: ${theme.radii.lg};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0 !important;
    }
  }
`;

export const prismLightTheme = css`
  ${prismBaseTheme};

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[50]};
    border: 1px solid ${theme.colors.gray[200]};
  }
  .mdx-marker {
    background-color: hsla(204, 45%, 96%, 1);
  }
`;

export const prismDarkTheme = css`
  ${prismBaseTheme};
  :not(pre) > code[class*='language-'] {
    background: #011627;
  }
  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }
  .token.comment {
    color: rgb(128, 147, 147);
  }
  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }
  .token.variable {
    color: rgb(214, 222, 235);
  }
  .token.number {
    color: rgb(247, 140, 108);
  }
  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }
  .token.punctuation {
    color: rgb(199, 146, 234);
  }
  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }
  .token.class-name {
    color: rgb(255, 203, 139);
  }
  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }
  .token.boolean {
    color: rgb(255, 88, 116);
  }
  .token.property {
    color: rgb(128, 203, 196);
  }
  .token.namespace {
    color: rgb(178, 204, 214);
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[50]};
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[700]};
  }
  .mdx-marker {
    background-color: ${theme.colors.gray[700]};
  }
  .remark-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
    border: 1px solid ${theme.colors.gray[700]};
  }
`;
