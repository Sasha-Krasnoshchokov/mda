import React, { memo, useCallback } from 'react';

import './templates.styles.css';
import { useDispatch } from 'react-redux';
import { resetSortedBy, setSortedBy } from '../../store/actions/sortedBySlicer';

interface ISortingItem {
  id: string;
  label: string;
}

interface IProps {
  list?: ISortingItem[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectedItems?: string[];
}

const SortingPanelTemplate: React.FC<IProps> = ({ list = [], onClick, selectedItems = [] }) => {
  const dispatch = useDispatch();

  const handleSortItem = useCallback(
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const { id } = e.target as HTMLUListElement;
      if (id.includes('reset-all')) {
        dispatch(resetSortedBy());
        return;
      }
      dispatch(setSortedBy(id));
    },
    [dispatch]
  );

  return (
    <ul
      className="sorting-panel"
      onClick={handleSortItem}
    >
      <button
        id="reset-all-sorts"
        type="button"
        className="sorting-panel-reset-all"
      />
      {list.map((item) => (
        <li
          key={item.id}
          className="sorting-panel-item"
        >
          <button
            id={`id=${item.id}, isDescending=true`}
            type="button"
            data-active={selectedItems.includes(`id=${item.id}, isDescending=true`)}
            data-descending={true}
            className="sorting-panel-item-button"
          />
          <span>{item.label}</span>
          <button
            id={`id=${item.id}, isDescending=false`}
            type="button"
            data-active={selectedItems.includes(`id=${item.id}, isDescending=false`)}
            className="sorting-panel-item-button"
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(SortingPanelTemplate);
