import { Helmet } from 'react-helmet-async';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage, Header } from './components';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <HashRouter>
      <Helmet
        titleTemplate="%s - NPM-registry"
        defaultTitle="NPM-registry"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A NPM-registry application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </HashRouter>
  );
}
