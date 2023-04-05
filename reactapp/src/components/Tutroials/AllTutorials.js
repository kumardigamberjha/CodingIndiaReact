import Footer from '../Footer'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function AllTutorials () {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const toComponentB = (x) => {
        console.log("Sending: ", x)
        navigate(`/Tutorials/CatwiseTutorials/${x}`, { state: { id: x } });
    }

    useEffect(() => {

        async function fetchData() {
            try {
                fetch('http://127.0.0.1:8000/Tutorials/')
                    .then((response) => response.json())
                    .then((json) => {
                        let data = JSON.parse(json)
                        console.log("data: ", data)
                        setProducts(data)
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
        <div>
            <Header />
            
            <h1 className='text-3xl font-medium title-font text-gray-900 text-center py-12'>All Tutorials</h1>
            <section className="text-gray-600  body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products && products.map((record, index) => (
                            <div className="p-4 md:w-1/3" key={record.pk}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-center" src={`http://127.0.0.1:8000/media/${record.fields.img}`} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{record.fields.name}</h1>
                                        {/* <p className="leading-relaxed mb-3">{record.fields.content.slice(41, 160)}</p> */}
                                        {/* <ReactQuill value={record.fields.content.slice(0, 80)} readOnly={true} /> */}
                                        <div className="flex items-center flex-wrap ">

                                            <a onClick={()=>{toComponentB(`${record.pk}`)}} className="bg-purple-700 hover:bg-purple-900 cursor-pointer text-white font-bold py-3 px-6 rounded-full" >read more...</a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AllTutorials


