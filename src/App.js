import React, {useState, useEffect} from "react";
import './index.css';
import axios from "axios";

import MainSection from "./Component/MainSection/MainSection";
import Card from "./Component/Card/Card"
import Pagination from "./Component/Pagination/Pagination"


function App() {
  const [details, setDetails] = useState();

  const fetchDetails = async () => {
    const { data } = await axios.get("https://www.reddit.com/r/reactjs.json");
    // console.log(data.data.children);
    let detail = data.data.children;
    setDetails(detail);
    // console.log(details)
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const [showPerPage, setShowPerPage] = useState(3);

  const [pagination, setPagition] = useState({
    start: 0,
    end: showPerPage
  });

  const onPaginationChange = (start, end) => {
    setPagition({ start: start, end: end });
  };

  return (
    <div className="App">
      <MainSection detail={details} >
          <Card details={details} pagination={pagination} />
      </MainSection>
      <div style={{backgroundColor: "#fff"}}>
            <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                // total={details.length}
                total= "27"
            />
            </div>
    </div>
  );
}

export default App;
