import React, { memo, useCallback, useState } from 'react';

import './common.styles.css';
import { ID, IOption, NavType } from '../../types/types';

interface IProps {
  menus: IOption[];
  onMenuClick: (item: IOption) => void;
  navType: NavType;
  highlightedMenuId?: string;
  activeMenuId?: ID;
}

const Navigation: React.FC<IProps> = ({
  menus,
  onMenuClick,
  navType,
  highlightedMenuId,
  activeMenuId,
}) => {
  const [activeId, setActiveId] = useState<ID>(activeMenuId || menus[0].id || '');

  const handleOption = useCallback(
    (item: IOption) => () => {
      onMenuClick(item);
      setActiveId(item.id);
    },
    [onMenuClick]
  );

  return (
    <ul className={`nav-wrapper ${navType}-wrapper`}>
      {menus.map((item) => (
        <React.Fragment key={item.id}>
          <button
            type="button"
            data-active={activeId === item.id ? 'active' : 'inactive'}
            onClick={handleOption(item)}
            data-highlighted={highlightedMenuId === item.id}
            className={`nav-option ${navType}-option`}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default memo(Navigation);
