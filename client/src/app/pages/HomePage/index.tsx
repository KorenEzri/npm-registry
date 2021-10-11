import { Helmet } from 'react-helmet-async';
import { MainContentFrame } from "app/components"

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="An NPM-registry application homepage" />
      </Helmet>
      <MainContentFrame />
    </>
  );
}
