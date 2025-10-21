import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffee');

  // Scroll reveal effect
  useEffect(() => {
    const elements = document.querySelectorAll('.menu-card');
    elements.forEach(el => el.classList.add('visible'));
  }, [activeTab]);

  const menuData = {
    coffee: [
      {
        name: 'Espresso',
        price: '₱120',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
      },
      {
        name: 'Cappuccino',
        price: '₱150',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348'
      },
      {
        name: 'Latte',
        price: '₱160',
        image: 'https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_315919556-scaled.jpeg'
      }
    ],
    pastries: [
      {
        name: 'Red Velvet Cake',
        price: '₱200',
        image: 'https://thebananadiaries.com/wp-content/uploads/2021/07/best-vegan-red-velvet-cake_4790-1333x2000.jpg'
      },
      {
        name: 'Biscoff Cake',
        price: '₱220',
        image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/03/Biscoff-cake-hero-08.jpg'
      },
      {
        name: 'Croissant',
        price: '₱90',
        image: 'https://i.pinimg.com/originals/0d/45/9e/0d459ec920cdded846c3bc6a8bd697c6.jpg'
      }
    ],
    cold: [
      {
        name: 'Iced Coffee',
        price: '₱140',
        image: 'https://www.windingcreekranch.org/wp-content/uploads/2022/05/Homemade-iced-coffee-1200-1200.jpg'
      },
      {
        name: 'Iced Latte',
        price: '₱160',
        image: 'https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220629.iced_.latte_.caramel-9182.jpg'
      },
      {
        name: 'Cold Brew',
        price: '₱170',
        image: 'https://sousvide.luxe/wp-content/uploads/2023/04/cold-refreshing-iced-cold-brew-coffee-2023-04-21-23-00-22-utc-scaled.jpg'
      }
    ]
  };

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      {/* Tab Buttons */}
      <div className="menu-tabs">
        <label 
          className={activeTab === 'coffee' ? 'active-tab' : ''}
          onClick={() => setActiveTab('coffee')}
        >
          Coffee
        </label>
        <label 
          className={activeTab === 'pastries' ? 'active-tab' : ''}
          onClick={() => setActiveTab('pastries')}
        >
          Pastries
        </label>
        <label 
          className={activeTab === 'cold' ? 'active-tab' : ''}
          onClick={() => setActiveTab('cold')}
        >
          Cold Drinks
        </label>
      </div>

      {/* Menu Items */}
      <div className={`menu-panel ${activeTab === 'coffee' ? 'active' : ''}`}>
        <div className="menu-grid">
          {menuData.coffee.map((item, index) => (
            <div key={index} className="menu-card visible">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`menu-panel ${activeTab === 'pastries' ? 'active' : ''}`}>
        <div className="menu-grid">
          {menuData.pastries.map((item, index) => (
            <div key={index} className="menu-card visible">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`menu-panel ${activeTab === 'cold' ? 'active' : ''}`}>
        <div className="menu-grid">
          {menuData.cold.map((item, index) => (
            <div key={index} className="menu-card visible">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

