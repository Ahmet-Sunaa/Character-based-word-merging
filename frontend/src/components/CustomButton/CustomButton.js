import React, { useRef, useState } from 'react';
import { ButtonGroup, Button, Grow, Paper, Popper, MenuItem, MenuList, ClickAwayListener } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomButton = ({ handleClick }) => {
    const options = ["Birleştir", "İptal", "Kaydet"]
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };


    return (
        <div>
            <ButtonGroup variant='contained' ref={anchorRef} size="medium">
                <Button onClick={() => handleClick(options, selectedIndex)} style={{ textTransform: "capitalize" }}>{options[selectedIndex]}</Button>
                <Button aria-controls={open ? 'split-buttın-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}> <ArrowDropDownIcon /></Button>
            </ButtonGroup>
            <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} transition disablePortal role={undefined}>
                {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem style={{ backgroundColor: "#1565c0" }}>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                            style={{ color: "white" }}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default CustomButton;