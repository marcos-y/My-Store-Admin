import React, { useState } from 'react';
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';

//COMPONENTS
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//1_ ADD PRODUCT
//2_ EDIT PRODUCT
//3_ DELETE PRODUCT
//4_ PRODUCT LIST

const Profile = () => {

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
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [spec1, setSpec1] = useState('');
    const [spec2, setSpec2] = useState('');
    const [spec3, setSpec3] = useState('');
    const [spec4, setSpec4] = useState('');
    const [spec5, setSpec5] = useState('');

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeImage = (event) => setImage(event.target.value);
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
        const product = { title, image, price, type, description, spec1, spec2, spec3, spec4, spec5 };
        axios.post(`http://localhost:8080/products/${type}`, product)
            .then(res => {
                console.log(res.data);
                setTitle('');
                setImage('');
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

    return (
        <>
            <div style={{
                maxWidth: '600px', margin: 'auto', padding: '8px', marginTop: '6px',
                backgroundColor: 'wheat', borderRadius: '10px', fontFamily: 'Roboto, sans-serif'
            }}>
                <div style={{ margin: 'auto', padding: '30px' }}>
                    <h1 >Add product</h1>
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
                        id="outlined-multiline-flexible2"
                        label="Image"
                        multiline
                        maxRows={4}
                        value={image}
                        onChange={handleChangeImage}
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

                    <Button onClick={handleClick} style={{ marginTop: '10px' }}
                        variant="contained">
                        Save
                    </Button>
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Profile;