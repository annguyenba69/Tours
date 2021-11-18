import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";
import NoTour from "./NoTour/NoTour";
import Tours from "./Tours/Tours";
function App() {
  const [listTours, setListTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  async function fetchData() {
    setLoading(true);
    try {
      const requestUrl = "https://course-api.com/react-tours-project";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setLoading(false);
      setListTours(responseJSON);
    } catch (error) {
      console.log("Failed: " + error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handleDeleteItem(id) {
    var tempListTours = [...listTours];
    tempListTours = tempListTours.filter(item => item.id !== id);
    setListTours(tempListTours);
    console.log(tempListTours);
  }
  function handleRefresh() {
    fetchData();
  }
  if (loading == true) {
    return (
      <div id="wrapper">
        <div className="container">
          <Loading></Loading>
        </div>
      </div>
    );
  }
  if (listTours.length <= 0) {
    return (
      <div id="wrapper">
        <div className="container">
          <NoTour handleRefresh={handleRefresh}></NoTour>
        </div>
      </div>
    )
  } else {
    return (
      <div id="wrapper">
        <div className="container">
          <Tours listTours={listTours} handleDeleteItem={handleDeleteItem}></Tours>
        </div>
      </div>
    )
  }
}


export default App;
