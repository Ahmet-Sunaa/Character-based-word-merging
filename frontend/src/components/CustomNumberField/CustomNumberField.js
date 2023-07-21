import { Box, TextField, Button } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useRef } from 'react';


const CustomNumberField = ({ number }) => {
    const ref = useRef('')

    return (
        <div>
            <Box sx={{ color: "#b08085" }}>Lütfen Kaç Tane Metni Birleştirmek İstediğinizi seçiniz</Box>
            <Box
                component="form"
                sx={{
                    paddingTop: 5,
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    '& .MuiFilledInput-underline:before': { borderBottomColor: '#b08085' },
                    '& .MuiFilledInput-underline:after': { borderBottomColor: '#32a852' },
                    '& .MuiFilledInput-root': {
                        '& input': {
                            backgroundColor: 'rgba(176, 128, 133,0.1)',
                            color: '#b08085'
                        },
                        '&.Mui-focused input': {
                            backgroundColor: 'rgba(50, 168, 82,0.1)',
                            color: '#32a852',
                        },
                    },


                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="filled-number"
                        label="Metin Sayısı"
                        type="number"
                        size='small'
                        inputRef={ref}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                color: "#b08085",
                                [`&.${inputLabelClasses.focused}`]: {
                                    color: "#32a852"
                                },
                            }
                        }}
                        InputProps={{
                            inputProps: { min: 2, defaultValue: 2, }
                        }}
                        variant="filled"
                    />
                </div>
            </Box>
            <div style={{ paddingTop: '2%', }}>
                <Button size='medium' sx={{
                    borderRadius: 5,
                    borderWidth: '3px',
                    color: '#b08085',
                    borderColor: '#b08085',
                    '&:hover': { borderColor: '#32a852', color: '#32a852', borderRadius: 5, borderWidth: '3px' }


                }} onClick={() => {
                    number(parseInt(ref.current.value))
                }} variant='outlined'>Metin Ekle</Button>
            </div>
        </div >
    );



}


export default CustomNumberField;