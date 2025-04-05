// pages/index.js
import React from 'react';

const HomePage = ({ articles }) => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blog</h1>
      {articles && articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.id} style={{ marginBottom: '2rem' }}>
            <h2>{article.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            <hr />
          </div>
        ))
      ) : (
        <p>Keine Artikel gefunden.</p>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  // Ersetze die URL durch den korrekten Pfad zu deinem PHP-Backend.
  const apiUrl = 'http://deine-domain.de/api/articles.php';
  const res = await fetch(apiUrl);
  const articles = await res.json();

  return { props: { articles } };
}

export default HomePage;