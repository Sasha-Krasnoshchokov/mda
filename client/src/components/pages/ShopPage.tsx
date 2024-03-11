import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import Navigation from '../common/Navigation';
import ShopPageTemplate from '../templates/ShopPageTemplate';

import SortingPanelTemplate from '../templates/SortingPanelTemplate';
import { sortList } from '../../utils/sortedList';
import { IProduct, IOption, SortedByKey, IFilter } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setShopCategory } from '../../store/actions/shopCategorySlicer';
import { RootState } from '../../store/store';
import ProductCard from '../common/ProductCard';
import API from '../../api/api';

const filters: IFilter[] = [
  { id: 'price', label: 'By price' },
  { id: 'producer', label: 'By producer' },
];

interface IProps {
  shopStores?: IOption[];
}

const ShopPage: React.FC<IProps> = ({ shopStores = [] }) => {
  const dispatch = useDispatch();
  const activeStore = useSelector((state: RootState) => state.activeShopCategory);
  const { sortedBy } = useSelector((state: RootState) => state.sortedBy);

  const { getData } = API;

  const [activeList, setActiveList] = useState<IProduct[]>([]);

  const preparedList = useMemo(() => {
    if (sortedBy.length === 0) return activeList;

    let sortedList: IProduct[] | null = null;
    sortedBy.forEach((item) => {
      const [id, param] = item.split(', ');
      sortedList = sortList(
        sortedList || activeList,
        id.replace('id=', '') as SortedByKey,
        param.replace('isDescending=', '') === 'true'
      );
    });
    return sortedList || [];
  }, [sortedBy, activeList]);

  const handleShopCategory = useCallback(
    (item: IOption) => {
      dispatch(setShopCategory({ id: `${item.id || 0}` }));
    },
    [dispatch]
  );

  const getProducts = useCallback(async () => {
    const response = await getData(`medicaments/${activeStore.id}`);
    setActiveList(response?.data || []);
  }, [getData, activeStore]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ShopPageTemplate
      navTitle="Medicaments"
      navigation={
        <Navigation
          navType="medicaments"
          menus={shopStores}
          activeMenuId={activeStore.id}
          onMenuClick={handleShopCategory}
        />
      }
      filtersBar={
        <SortingPanelTemplate
          list={filters}
          selectedItems={sortedBy}
        />
      }
      content={preparedList.map((card) => (
        <React.Fragment key={card.id}>
          <ProductCard product={card} />
        </React.Fragment>
      ))}
    />
  );
};

export default memo(ShopPage);
