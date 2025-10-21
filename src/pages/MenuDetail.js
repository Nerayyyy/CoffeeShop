import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const MenuDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const menuDetails = {
    coffee: {
      title: 'Coffee Selection',
      description: 'Our coffee is sourced from the finest sustainable farms around the world. Each bean is carefully selected and roasted to perfection.',
      items: ['Espresso', 'Cappuccino', 'Latte', 'Americano', 'Mocha']
    },
    pastries: {
      title: 'Fresh Pastries',
      description: 'Our pastries are baked fresh daily using premium ingredients. Perfect accompaniment to your coffee.',
      items: ['Red Velvet Cake', 'Biscoff Cake', 'Croissant', 'Danish Pastry', 'Muffins']
    },
    cold: {
      title: 'Cold Beverages',
      description: 'Refreshing cold drinks perfect for hot days. Made with our signature blends and fresh ingredients.',
      items: ['Iced Coffee', 'Iced Latte', 'Cold Brew', 'Frappuccino', 'Iced Mocha']
    }
  };

  const details = menuDetails[category];

  if (!details) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f9f4ef',
        padding: '2rem'
      }}>
        <h2 style={{ color: '#4b3832' }}>Category not found</h2>
        <button 
          onClick={() => navigate('/menu')}
          style={{
            padding: '0.8rem 2rem',
            background: '#8b5e3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#f9f4ef',
      padding: '6rem 2rem 4rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#4b3832', marginBottom: '1rem' }}>
          {details.title}
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#555', 
          marginBottom: '2rem',
          lineHeight: '1.8'
        }}>
          {details.description}
        </p>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#6f4e37', marginBottom: '1rem' }}>
            Available Items:
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {details.items.map((item, index) => (
              <li key={index} style={{
                padding: '0.8rem',
                background: '#f9f4ef',
                borderRadius: '8px',
                color: '#4b3832',
                fontWeight: '500'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={() => navigate('/menu')}
            style={{
              padding: '0.8rem 2rem',
              background: '#8b5e3c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#6e452b'}
            onMouseOut={(e) => e.target.style.background = '#8b5e3c'}
          >
            Back to Menu (Programmatic)
          </button>
          
          <Link 
            to="/menu"
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              background: '#6f4e37',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'background 0.3s ease'
            }}
          >
            Back to Menu (Link)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuDetail;

