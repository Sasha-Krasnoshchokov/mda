import React, { memo } from 'react';

import './templates.styles.css';

interface IProps {
  navTitle?: string;
  navigation?: React.ReactNode;
  filtersBar?: React.ReactNode;
  content?: React.ReactNode;
}

const ShopPageTemplate: React.FC<IProps> = ({ navTitle, navigation, filtersBar, content }) => (
  <div className="page-wrapper">
    <aside
      className="page-aside-wrapper shop-page-categories"
      content={navTitle || 'Text'}
    >
      <div className="scrolling">{navigation || 'Nav list'}</div>
    </aside>
    <div className="page-content-wrapper shop-page-content-wrapper">
      <div className="scrolling">
        <div className="page-content">
          {filtersBar}
          {content || 'Content'}
        </div>
      </div>
    </div>
  </div>
);

export default memo(ShopPageTemplate);
