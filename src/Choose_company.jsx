import React, { useState } from 'react';
import './Styles/choose_company.css';

import DesignImage from './Styles/Design.png';
import PhotographerImage from './Styles/Photographer.png';
import ITImage from './Styles/IT.png';
import FashionImage from './Styles/Fashion.png';
import TheatreImage from './Styles/Movie.png';
import MarketingImage from './Styles/Marketing.png';
import FilterIcon from './Styles/filter.png'

const organizations = [
  { id: 1, name: 'Дизайн', image: DesignImage, size: 'first' },
  { id: 2, name: 'Фотография и видеопроизводство', image: PhotographerImage, size: 'second' },
  { id: 3, name: 'IT и цифровое творчество', image: ITImage, size: 'third' },
  { id: 4, name: 'Мода и стиль', image: FashionImage, size: 'forth' },
  { id: 5, name: 'Театр и кино', image: TheatreImage, size: 'fifth' },
  { id: 6, name: 'Реклама и маркетинг', image: MarketingImage, size: 'six' },
];

function ChooseCompany() {
  const [selectedCard, setSelectedCard] = useState(null); 

  const handleCardClick = (orgId, orgName) => {
    if (selectedCard === orgId) {
      setSelectedCard(null); 
    } else {
      setSelectedCard(orgId); 
    }
    console.log(`Вы выбрали организацию: ${orgName}`);
  };

  return (
    <div className="choose-company">
      <h1 className="title">CastFind</h1>
      <p className="subtitle">
        Выберите организацию, к которой хотите бы присоединиться
      </p>
      <div className="search-section">
        <h3>Попробуйте поиск по названию</h3>
        <div className="search-bar">
          <input type="text" placeholder="Введите запрос..." />
          <button className="filter-btn"><img src={FilterIcon} alt="Filter icon" /></button>
        </div>
        <h3>Или используйте код приглашения</h3>
        <input type="text" placeholder="Введите код приглашения" className="invite-input" />
        <div className="divider"></div>
        <button className="create-btn">Создать новую организацию</button>
      </div>
      <div className="popular-section">
        <h2>Популярные организации</h2>
        <div className="organization-grid">
          {organizations.map((org) => (
            <button
              key={org.id}
              className={`organization-card ${org.size} ${selectedCard === org.id ? 'selected' : ''}`} 
              onClick={() => handleCardClick(org.id, org.name)}
            >
              <img src={org.image} alt={org.name} />
              <p className="organization-name">{org.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <button className="secondary-btn">Настроить позже</button>
        <button className="primary-btn">Присоединиться</button>
      </div>
    </div>
  );
}

export default ChooseCompany;