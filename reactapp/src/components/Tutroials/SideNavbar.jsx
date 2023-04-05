import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TutorialContent from './TutorialContent';
import ListGroupItem from './ListGroupItem';

const SideNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state && location.state.id;
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [contentItem, setcontentItem] = useState([]);
  const [contentBody, setcontentBody] = useState([]);


  const handleSelectItem = (items, content) => {
    // console.log("Item: ", items)
    // console.log("Item: ", content)

    setcontentItem(items)    
    setcontentBody(content)
  }

  useEffect(() => {

    async function fetchData() {
      try {
        fetch(`http://127.0.0.1:8000/Tutorials/CatwiseTutorials/${id}/`)
          .then((response) => response.json())
          .then((json) => {
            // console.log("JSON: ", json)
            let data = JSON.parse(json)
            setProducts(data)
            // console.log("response", data)

            setLoading(false);
          })
      }
      catch (error) {
        console.log("ERROR LOGS: ", error);
      }
      // }, 10000);
    }

    fetchData();
  }, []);


  return (
    <div className="flex h-screen ">
      <div
        className={`fixed inset-y-0 left-0 w-64 transition-all duration-300 ease-in-out bg-gray-400 ${isSidebarOpen ? "block" : "hidden"
          }`} style={{ borderRight: "2px solid black" }}
      >
        <div className="flex items-center justify-center mt-2 pb-2">
          <Link to="/"><img
            className="w-auto rounded-full h-12"
            style={{ height: "80px", boxShadow: "2px 2px 200px white" }}
            src="https://drive.google.com/uc?export=view&id=1Ho2t6tuc6hPaMSc1lviu9lpZAQJw6Tn0"
            alt=""
          /></Link>
          <span className="text-2xl font-semibold ml-2 ">My App</span>
        </div>
        <hr style={{ width: "80%", margin: "auto", border: "1px solid purple" }} />
        <ListGroupItem products={products} onSelectItem={handleSelectItem} />
    </div>
      {/* Content */ }
  <div
    className={`flex-1 overflow-auto ${isSidebarOpen ? "ml-64" : "ml-0"
      } transition-all duration-300 ease-in-out`}
  >
    <div className="p-10">
      {/* Toggle button */}
      <button
        className="absolute top-6 right-6 bg-gray-100 rounded-full p-2 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (

          <FontAwesomeIcon icon={faXmark} />
        ) : (

          <FontAwesomeIcon icon={faBarsStaggered} />
        )}
      </button>
      {/* {contentItem} */}
      <TutorialContent name={contentItem} content={contentBody} />
    </div>
  </div>
    </div >
  );
};

export default SideNavbar;
