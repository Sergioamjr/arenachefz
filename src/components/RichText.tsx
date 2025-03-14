import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import cx from 'classnames';
import React from 'react';

export const RichText = ({ content, classes }: any) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: any, children: any) => <h1 className={cx(classes?.heading)}>{children}</h1>,
      [BLOCKS.HEADING_2]: (_: any, children: any) => <h2 className={cx(classes?.heading)}>{children}</h2>,
      [BLOCKS.HEADING_3]: (_: any, children: any) => <h3 className={cx(classes?.heading)}>{children}</h3>,
      [BLOCKS.HEADING_4]: (_: any, children: any) => <h4 className={cx(classes?.heading)}>{children}</h4>,
      [BLOCKS.HEADING_5]: (_: any, children: any) => <h5 className={cx(classes?.heading)}>{children}</h5>,
      [BLOCKS.HEADING_6]: (_: any, children: any) => <h6 className={cx(classes?.heading)}>{children}</h6>,
      [BLOCKS.PARAGRAPH]: (_: any, children: any) => <p className={cx(classes?.p)}>{children}</p>,
      [BLOCKS.UL_LIST]: (_: any, children: any) => <ul className={cx(classes?.ul)}>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (_: any, children: any) => <li className={cx(classes?.li)}>{children}</li>,
      [BLOCKS.OL_LIST]: (_: any, children: any) => <ol className={cx(classes?.ol)}>{children}</ol>,
    },
  };
  return <div className="rich-text">{documentToReactComponents(content, options)}</div>;
};
