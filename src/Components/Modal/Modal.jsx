import React,{useState,useEffect} from 'react';
import axios from "axios";

//COMPONENTS
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:'100%',
    overflow:'scroll',
    display:'block',
    marginTop:'30px',
    borderRadius:'10px',
};

export default function ModalTransition(props) {
    const [open, setOpen] = React.useState(false);

    //Select component options
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

    const [title, setTitle] = useState(props.title);
    const [image, setImage] = useState(props.image);
    const [price, setPrice] = useState(props.price);
    const [type, setType] = useState(props.type);
    const [description, setDescription] = useState(props.description);
    const [spec1, setSpec1] = useState(props.spec1);
    const [spec2, setSpec2] = useState(props.spec2);
    const [spec3, setSpec3] = useState(props.spec3);
    const [spec4, setSpec4] = useState(props.spec4);
    const [spec5, setSpec5] = useState(props.spec5);

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

    //Edit product
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
        //const product = { title, image, price, type, description, spec1, spec2, spec3, spec4, spec5 };
        axios.put(`http://localhost:8080/products/${type}/${props.id}`, payload)
            .then(res => {
                console.log(res.data);
                alert('Product edited successfully!')
            })
            .catch(e => console.log(e));
    }

    //const imgUrl = image && URL.createObjectURL(image);
 
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}>
                        <IconButton size="small" onClick={props.handleClose} style={{ float: 'right' }}>
                            <CloseIcon size="small"/>
                        </IconButton>
                        <h1 >Edit product</h1>

                    <div style={{display:'flex',flexDirection:'column'}}>
                        <img src={props.image} style={{ maxWidth: '194px' }}></img>

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
                        label="Type"
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

                    <Button onClick={handleClick}  color='success' style={{ marginTop: '20px' }}
                        variant="contained">
                        Save
                    </Button>
    
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}