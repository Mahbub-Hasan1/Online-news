import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import './ModalOurEventUpdate.css'


const ModalOurEventUpdate = ({ event }) => {
    const { register, handleSubmit } = useForm();
    const [uploadImgUrl, setUploadImgUrl] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = e => {
        const title = e.title;
        const eventDetails = e.eventDetails;


        const eventFromData = { title, eventDetails, ...uploadImgUrl };

        const _id = event._id;
        fetch(`http://localhost:5050/updateOurEventHomPage/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventFromData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('event updated successfully')
                }
            })
    };

    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '2f47761ebe19b643e50f810bd1150248')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }

    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {
                const imageUrl = {}
                imageUrl.img = resp.data.data.thumb.url;
                setUploadImgUrl(imageUrl);

            })
        e.preventDefault();
    }



    return (
        <div>
            <button style={{ color: '#fff' }} onClick={handleClickOpen}>update This event</button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>
                    <h5>{event.title}</h5>
                </DialogTitle>

                <DialogTitle>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="file" onChange={upload} name="img" ref={register} required placeholder="update img" className="registration-form updateEventInput" />
                        <input type="text" name="title" ref={register} required placeholder="update event title" className="registration-form updateEventInput" />
                        <textarea type="text" name="eventDetails" ref={register} required placeholder="update event details" className="registration-form updateEventInput" />
                        <input type="submit" required placeholder="সাবমিট" className="registration-form" />
                    </form>

                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalOurEventUpdate;