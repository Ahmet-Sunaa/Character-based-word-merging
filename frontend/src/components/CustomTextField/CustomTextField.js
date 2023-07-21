import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';



const CustomTextField = ({ handleData }) => {
    const [text, setText] = useState(' ');

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch', },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 3,
                            borderColor: 'purple',
                        },
                        '&:hover fieldset': {
                            borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'gray',
                        },
                    },

                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Metin"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={(e) => handleData(word =>
                            [...word, e.target.value.trim()]
                        )}
                        multiline
                        maxRows={4}
                    />
                </div>
            </Box>
        </div >
    );
}

export default CustomTextField;