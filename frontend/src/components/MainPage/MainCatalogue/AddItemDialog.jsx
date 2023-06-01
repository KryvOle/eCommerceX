import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import LoginTextField from '../../LoginPage/LoginTextField'
import AddItemPhoto from './AddItemPhoto'
import FileUpload from './FileUpload'

function AddItemDialog({open, onClose}) {
  return (
    <Dialog open={open} >
        <DialogTitle sx={{
            backgroundColor: '#171A25',
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '22px',
            fontWeight: '500',
            justifyContent: 'center',
            display: 'flex',
        }}>Додати товар</DialogTitle>
        <DialogContent sx={{
            backgroundColor: '#171A25',
            height: 1,
            overflowY: "overlay",
            "@media (hover: hover)": {
                "&": { overflowY: "hidden", overflowX: "hidden" },
                "&:hover, &:active": {
                overflowY: "overlay",
                overflowX: "overlay",
                },
                "&::-webkit-scrollbar": {
                width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                backgroundColor: "black",
                borderRadius:8,
                border: "5px solid rgba(0, 0, 0, 0)",
                backgroundClip: "padding-box",
                },
            },
        }}>
            <Box sx={{
                backgroundColor: "#171A25",
                height: "fit-content",
            }}>
               <LoginTextField title="Назва товару" type="text" /> 
               <LoginTextField title="Ціна" type="text" /> 
               <LoginTextField title="Бренд" type="text" /> 
               <FormControl sx={{ m: 1, minWidth: 120,}}>
                    <InputLabel sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                        color: '#4D4D4D'
                    }}>Стать</InputLabel>
                   <Select labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Стать"sx={{
                        color: 'white',   
                        border: "1px solid #4D4D4D",
                        borderRadius: "10px", 
                        width: { xs: 210, sm: 390, md: 420, xl: 450 },     
                        marginBottom: '40px',  
                        justifyContent: 'center'}}
                        inputProps={{
                        style: {
                            color: 'white', 
                        },         
                   }}>
                        <MenuItem value={10}>Чоловічі</MenuItem>
                        <MenuItem value={20}>Жіночі</MenuItem>
                        <MenuItem value={30}>Універсальні</MenuItem>
                    </Select>
               </FormControl>
               <LoginTextField title="Матеріал корпусу" type="text" /> 
               <LoginTextField title="Стиль" type="text" />
               <LoginTextField title="Опис" type="text" /> 
               <Grid container direction="row">
                   <Grid item>
                       <AddItemPhoto />
                   </Grid>
                   <Grid item>
                       <FileUpload />
                   </Grid>
               </Grid>
            </Box>
        </DialogContent>
        <DialogActions sx={{
            backgroundColor: '#171A25',
        }}>
            <Button variant='outlined' onClick={onClose}
            sx={{
                color: "white",
                justifyContent: 'center',
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '22px',
                fontWeight: "500px",
                textTransform: 'none',
                width: 'fit-content',
                height: '40px',
                borderRadius: '40px',
                marginTop: '20px',
                marginBottom: '30px',
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }}>Скасувати</Button>
            <Button variant='outlined' 
            sx={{
                color: "white",
                justifyContent: 'center',
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '22px',
                fontWeight: "500px",
                textTransform: 'none',
                width: 'fit-content',
                height: '40px',
                borderRadius: '40px',
                marginTop: '20px',
                marginBottom: '30px',
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }}>Зберегти</Button>
        </DialogActions>
    </Dialog>
  )
}

export default AddItemDialog