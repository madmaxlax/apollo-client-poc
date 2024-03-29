import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Minimal from './layouts/Minimal/Minimal';
import { MainPage } from './pages/MainPage';
import { NotMadeYet } from './pages/NotMadeYet';
import { QueryPage } from './pages/QueryPage';

const Routing = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Main>
            <MainPage />
          </Main>
        }
      />
      <Route
        path={'/query'}
        element={
          <Minimal>
            <QueryPage />
          </Minimal>
        }
      />

      {/*
      <RouteWithLayout component={MainPage} exact layout={Main} path="/main/:pageName" />
      <RouteWithLayout component={NotMadeYet} exact layout={Minimal} 
      layoutprops={{}} path="/404-not-found" /> */}
      <Route
        path={'/404-not-found'}
        element={
          <Main>
            <NotMadeYet />
          </Main>
        }
      />
      <Route
        path="*"
        element={
          <Navigate
            to={{
              pathname: '/404-not-found',
              search: '?from=' + encodeURIComponent(window.location.href),
            }}
          />
        }
      />
    </Routes>
  );
};

export default Routing;
