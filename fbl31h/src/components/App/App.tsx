import React, { FunctionComponent } from 'react';

import VehiclesContainer from '../VehiclesContainer';

const App: FunctionComponent = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1>Reddit Post</h1>
        <p>This page is in response to <a href="https://www.reddit.com/r/cars/comments/fbl31h/if_the_fastest_vehicle_produced_each_year_was_put/">this Reddit post</a> and <a href="https://www.reddit.com/r/cars/comments/fbl31h/if_the_fastest_vehicle_produced_each_year_was_put/fj4ynns/">comment</a>.</p>
        <h1>The Leg Work</h1>
        <VehiclesContainer/>
      </div>
    </div>
  </div>
);

export default App;
