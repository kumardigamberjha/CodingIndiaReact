import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ReadBlog = () => {
    const location = useLocation();
    const name = location.state && location.state.name;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { richTextFieldContent } = props;

    useEffect(() => {

        async function fetchData() {
            try {
                fetch(`http://127.0.0.1:8000/Blogs/ReadBlog/${name}/`)
                    .then((response) => response.json())
                    .then((json) => {
                        console.log("JSON: ", json)
                        let data = JSON.parse(json)
                        setProducts(data)
                        console.log("response", data)

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
            <div class="container px-4 " style={{ paddingTop: "95px" }}>
                {products && products.map((record, index) => (
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg">
                            <div dangerouslySetInnerHTML={{ __html: record.fields.content }}></div>
                        </div>
                    </div>
                ))
                }
            </div>
            <Footer />

        </div >
    )
}

export default ReadBlog