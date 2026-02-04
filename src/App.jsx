/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import showsData from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
export default function App() {

  const [shows] = useState(showsData);

  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>

          <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
          <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
