import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Intro from '../components/Intro';
import Feature from '../components/Feature';


import { QUERY_THOUGHTS, QUERY_RESTAURANTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RESTAURANTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main> testing
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
        >
          {/* <ThoughtForm /> */}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )} */}
          {/* <Intro />
          <Feature /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
