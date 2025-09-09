import { Providers } from 'app/providers';
import { NewsPage } from 'pages/news-page';

function App() {
  return (
    <Providers>
      <NewsPage />
    </Providers>
  );
}

export default App;
