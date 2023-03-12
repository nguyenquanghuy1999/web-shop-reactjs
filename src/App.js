import { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault/LayoutDefault';
import { routes } from './routes'
import { StoreContext } from './store';
import { renderCartList } from './store/state/actions';

function App() {

  const [, dispatch] = useContext(StoreContext)

  useEffect(() => {
    dispatch(renderCartList())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {

            let Layout = LayoutDefault;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = <Fragment />
            }

            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
