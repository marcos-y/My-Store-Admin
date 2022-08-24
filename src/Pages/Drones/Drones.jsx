import React, { useEffect, useState } from 'react';
import axios from "axios";

//COMPONENTS
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';

const Drones = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.
            get('http://localhost:8080/products/drones')
            .then(res => {
                console.log('database data:', res.data.data);
                setItems(res.data.data);
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <>
            <AppBar />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>Drones</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (
                                <Card key={index}
                                id={item.id}
                                price={item.price}
                                spec1={item.spec1}
                                spec2={item.spec2}
                                spec3={item.spec3}
                                spec4={item.spec4}
                                spec5={item.spec5}
                                image={item.image}
                                title={item.title}
                                type={item.type}
                                description={item.description} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Drones;