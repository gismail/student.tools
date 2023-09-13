import React, { useState} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputLabel, Typography } from "@mui/material";

function StringLength() {
    const [stringlength, setStringLength] = useState(0);

    return (
        <div>
            <h1>Online Character Counter : Calculate String Length</h1>
            <Box><TextField
                id="outlined-multiline-static"
                label="Your Input Text"
                placeholder="Place your text here ..."
                rows={4}
                color="success"
                multiline
                fullWidth
                focused
                onChange={(event) => { setStringLength(event.target.value.length) }}
            />
            </Box>
            <Box sx={{ marginTop: '10px', width: '100%' }}>
                <InputLabel sx={{ color: 'white', margin: '5px', textAlign: 'right' }}>Size : <strong>{stringlength}</strong> B(Byte), <strong>{stringlength}</strong> Characters</InputLabel>

            </Box>
            <Box sx={{ marginTop: '10px' }}>
                <Typography align="center" fontSize={26} paragraph>Your text size is <strong style={{ color: 'aqua' }}>{stringlength}</strong> characters</Typography>
            </Box>
        </div>
    );
}

export default StringLength;






