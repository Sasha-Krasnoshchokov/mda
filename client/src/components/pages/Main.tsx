import React, { useCallback, useEffect, useState } from 'react';

import './pages.styles.css';
import ShopPage from './ShopPage';
import { IOption } from '../../types/types';
import PagesNavigation from '../common/PagesNavigation';
import OrderPage from './OrderPage';
import API from '../../api/api';

const tabs: IOption[] = [
  { id: 'shop', label: 'Shop' },
  { id: 'order', label: 'Order' },
];

const Main: React.FC = () => {
  const { getData } = API;

  const [activeTab, setActiveTab] = useState<IOption>(tabs[0]);
  const [shopStores, setShopStores] = useState<IOption[]>([]);

  const getStores = useCallback(async () => {
    const response = await getData('stores');
    setShopStores(response?.data || []);
  }, [getData]);

  useEffect(() => {
    getStores();
  }, [getStores]);

  return (
    <div className="main">
      <div className="main-nav">
        <PagesNavigation setActiveTab={setActiveTab} />
      </div>
      <div className="main-page-section">
        {activeTab.id === 'shop' && shopStores.length > 0 && <ShopPage shopStores={shopStores} />}
        {activeTab.id === 'order' && <OrderPage />}
      </div>
    </div>
  );
};

export default Main;
