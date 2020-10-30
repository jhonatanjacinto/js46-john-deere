import React from 'react';
import MasterPage from '../../components/MasterPage/index.js';

function HomePage() {
  return (
    <MasterPage titulo="Home">
      <section className="card">
          <header className="card-header p-3">
              <h2>Bem-vindo(a) à nossa concessionária!</h2>
          </header>
          <div className="card-body p-3">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maiores laudantium facilis, rerum consequuntur minima possimus eum quod harum officia vitae voluptatem enim suscipit atque, earum ex sit dolorum illo!</p>
          </div>
      </section>
    </MasterPage>
  );
}

export default HomePage;
