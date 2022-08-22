import React, { useState } from 'react';
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import img from '../../Images/iphone.jpg';

//COMPONENTS
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//1_ ADD PRODUCT
//2_ EDIT PRODUCT
//3_ DELETE PRODUCT
//4_ PRODUCT LIST

const Products = () => {

    const products = [
        {
            type: 'newitems'
        },
        {
            type: 'smartphones'
        },
        {
            type: 'drones'
        },
        {
            type: 'computers'
        },
    ];

    const [title, setTitle] = useState('');
    const [image, setImage] = useState("");
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [spec1, setSpec1] = useState('');
    const [spec2, setSpec2] = useState('');
    const [spec3, setSpec3] = useState('');
    const [spec4, setSpec4] = useState('');
    const [spec5, setSpec5] = useState('');

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeImage = (event) => setImage(event.target.files[0]);
    const handleChangePrice = (event) => setPrice(event.target.value);
    const handleChangeType = (event) => setType(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeSpec1 = (event) => setSpec1(event.target.value);
    const handleChangeSpec2 = (event) => setSpec2(event.target.value);
    const handleChangeSpec3 = (event) => setSpec3(event.target.value);
    const handleChangeSpec4 = (event) => setSpec4(event.target.value);
    const handleChangeSpec5 = (event) => setSpec5(event.target.value);

    const handleClick = () => {
        console.log(title, image, price, type, description, spec1, spec2, spec3, spec4, spec5);
        const payload = new FormData();
        payload.append("title",title);
        payload.append("image",image);
        payload.append("price",price);
        payload.append("type",type);
        payload.append("descrpition",description);
        payload.append("spec1",spec1);
        payload.append("spec2",spec2);
        payload.append("spec3",spec3);
        payload.append("spec4",spec4);
        payload.append("spec5",spec5);
        const product = { title, image, price, type, description, spec1, spec2, spec3, spec4, spec5 };
        axios.post(`http://localhost:8080/products/${type}`, payload)
            .then(res => {
                console.log(res.data);
                setTitle('');
                setImage("");
                setPrice('');
                setType('');
                setDescription('');
                setSpec1('');
                setSpec2('');
                setSpec3('');
                setSpec4('');
                setSpec5('');
            })
            .catch(e => console.log(e));
    }

    const imgUrl = image && URL.createObjectURL(image);

    return (
        <>
            <div style={{
                maxWidth: '600px', margin: 'auto', padding: '8px', marginTop: '6px',
                backgroundColor: 'wheat', borderRadius: '10px', fontFamily: 'Roboto, sans-serif'
            }}>
                <div style={{ margin: 'auto', padding: '30px' }}>
                    <h1 >Add product</h1>

                    <div style={{display:'flex',flexDirection:'column'}}>
                        <img src={imgUrl} style={{ maxWidth: '194px' }}></img>

                        <Button style={{ marginTop: '30px', maxWidth:'150px' }} 
                        variant="contained" component="label">
                            Upload Image
                            <input onChange={handleChangeImage} hidden multiple type="file" />
                        </Button>
                    </div>

                    <TextField
                        id="outlined-multiline-flexible0"
                        label="Title"
                        multiline
                        maxRows={4}
                        value={title}
                        onChange={handleChangeTitle}
                        style={{ width: '100%', marginTop: '30px' }} />

                    <TextField
                        id="outlined-multiline-flexible1"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={description}
                        onChange={handleChangeDescription}
                        style={{ width: '100%', marginTop: '30px' }} />



                    <TextField
                        id="outlined-multiline-flexible3"
                        label="Price"
                        multiline
                        maxRows={4}
                        value={price}
                        onChange={handleChangePrice}
                        style={{ width: '100%', marginTop: '30px' }} />


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select category"
                        value={type}
                        onChange={handleChangeType}
                        helperText="Please select product category"
                        style={{ width: '100%', marginTop: '30px' }}
                    >
                        {products.map((option) => (
                            <MenuItem key={option.type} value={option.type}>
                                {option.type}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="outlined-multiline-flexible5"
                        label="Spec1"
                        multiline
                        maxRows={4}
                        value={spec1}
                        onChange={handleChangeSpec1}
                        style={{ width: '100%', marginTop: '30px' }} />

                    <TextField
                        id="outlined-multiline-flexible6"
                        label="Spec2"
                        multiline
                        maxRows={4}
                        value={spec2}
                        onChange={handleChangeSpec2}
                        style={{ width: '100%', marginTop: '30px' }} />


                    <TextField
                        id="outlined-multiline-flexible7"
                        label="Spec3"
                        multiline
                        maxRows={4}
                        value={spec3}
                        onChange={handleChangeSpec3}
                        style={{ width: '100%', marginTop: '30px' }} />

                    <TextField
                        id="outlined-multiline-flexible8"
                        label="Spec4"
                        multiline
                        maxRows={4}
                        value={spec4}
                        onChange={handleChangeSpec4}
                        style={{ width: '100%', marginTop: '30px' }} />

                    <TextField
                        id="outlined-multiline-flexible9"
                        label="Spec5"
                        multiline
                        maxRows={4}
                        value={spec5}
                        onChange={handleChangeSpec5}
                        style={{ width: '100%', marginTop: '30px' }} />

                    <Button onClick={handleClick} color='success' style={{ marginTop: '20px' }}
                        variant="contained">
                        Save
                    </Button>
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Products;