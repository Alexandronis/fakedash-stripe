import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '../../assets/home.svg';
import HomeIconActive from '../../assets/home-active.svg';
import BalancesIcon from '../../assets/balances.svg';
import BalancesIconActive from '../../assets/balances-active.svg';
import TransactionsIcon from '../../assets/transactions.svg';
import CustomersIcon from '../../assets/customers.svg';
import ProductCatalogIcon from '../../assets/product-catalog.svg';
import GeneralIcon from '../../assets/clock.svg';
import PaymentsIcon from '../../assets/payments.svg';
import ArrowIcon from '../../assets/arrow.svg';
import BillingIcon from '../../assets/billing.svg';
import ReportingIcon from '../../assets/reporting.svg';
import MoreIcon from '../../assets/more.svg';
import './sidebar.scss';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const current = location.pathname.replace('/', '');
  const activatableIds = ['dashboard', 'balance/overview'];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a
          role="button"
          className="sidebar-top-link"
        >
          <div className="sidebar-top-image">
            <img
              id="avatarImage"
              src="/avatar.jpeg"
              alt="Z"
            />
          </div>
          <div className="sidebar-top-text-wrapper">
            <div className="sidebar-top-text">
              DASHNAMEHERE
            </div>
          </div>
          <img src={ArrowIcon} alt="Arrow"/>
        </a>
      </div>
      <div className="sidebar-main">
        <nav id="primary-nav" className="primary-nav">
          <section id="core-nav" className="menu-section">
            <ul className="menu-list">
              {[
                {id: 'dashboard', label: 'Home', icon: HomeIcon, iconActive: HomeIconActive},
                {id: 'balance/overview', label: 'Balances', icon: BalancesIcon, iconActive: BalancesIconActive},
                {id: 'transactions', label: 'Transactions', icon: TransactionsIcon, iconActive: HomeIconActive},
                {id: 'customers', label: 'Customers', icon: CustomersIcon, iconActive: HomeIconActive},
                {id: 'product_catalog', label: 'Product catalog', icon: ProductCatalogIcon, iconActive: HomeIconActive},
              ].map((item) => (
                <li
                  className={`list-item ${activatableIds.includes(item.id) && current === item.id ? 'active' : ''}`}>
                  <NavLink
                    to={`/${item.id}`}
                    className="list-item-link"
                    onClick={(e) => {
                      if (!activatableIds.includes(item.id)) e.preventDefault();
                    }}
                  >
                    <span className="item-link-wrapper">
                      <span className="icon-wrapper">
                        <img src={activatableIds.includes(item.id) && current === item.id ? item.iconActive : item.icon} alt="Link"/>
                      </span>
                      <span className="link-text" id={item.id ? `text_${item.id}` : undefined}>
                        {item.label}
                      </span>
                    </span>
                    </NavLink>
                </li>
                ))}
            </ul>
          </section>

          {/* Shortcuts Section */}
          <section id="workloads-nav" className="menu-section">
            <div className="primary-nav-section-header">Shortcuts</div>
            <ul className="menu-list">
            {[
                {id: 'payment_links', label: 'Payment Links'},
                {id: 'tax', label: 'Tax'},
                {id: 'billing_overview', label: 'Billing Overview'},
                {id: 'disputes', label: 'Disputes'},
                {id: 'subscriptions', label: 'Subscriptions'},
              ].map((item) => (
                <li className="list-item" key={item.id || item.label}>
                  <a
                    href="#"
                    className="list-item-link"
                  >
                    <span className="item-link-wrapper">
                      <span className="icon-wrapper">
                        <img src={GeneralIcon} alt="Link"/>
                      </span>
                      <span className="link-text" id={item.id ? `text_${item.id}` : undefined}>
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Products Section */}
          <section id="workloads-nav" className="menu-section">
            <div className="primary-nav-section-header">Products</div>
            <ul className="menu-list">
              {[
                {id: 'payments', label: 'Payments', icon: PaymentsIcon},
                {id: 'billing', label: 'Billing', icon: BillingIcon},
                {id: 'reporting', label: 'Reporting', icon: ReportingIcon},
                {id: 'More', label: 'More', icon: MoreIcon},
              ].map((item) => (
                <li className="list-item" key={item.id || item.label}>
                  <a
                    href="#"
                    className="list-item-link"
                  >
                    <span className="item-link-wrapper">
                      <span className="icon-wrapper">
                        <img src={item.icon} alt="Link" />
                      </span>
                      <span className="link-text" id={item.id ? `text_${item.id}` : undefined}>
                        {item.label}
                      </span>
                    </span>
                    <span className="item-arrow">
                      <img src={ArrowIcon} alt="Arrow" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <div className="⚙ as-17 as-67 ⚙mc1oig"></div>
          <div className="⚙ as-68 as-69 as-3s as-2q as-7 ⚙1kwyhby"></div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
