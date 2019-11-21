import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { CityStore } from '../../stores';
import TicketList from '../../components/TicketList';
import CityList from '../../components/CityList';
import { TotalStore } from '../../stores/TotalStore';
import Main from '../../components/Main';

const HomePage = ({ match, history, location }) => {
  return (
    <div>
      <CityStore>
        <Link to="/plan/111">Plan</Link>
        <TicketList />
        <CityList />
        <TotalStore>
          <Main />
        </TotalStore>
      </CityStore>
    </div>
  );
};

export default HomePage;