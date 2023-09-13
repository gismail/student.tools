import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid, IconButton, InputAdornment, InputLabel, List, ListItem, Stack, Tooltip, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './string-length.css'

function StringLength() {
    const [stringlength, setStringLength] = useState(0);
    // Create a state variable for the tooltip text
    const [tooltipText, setTooltipText] = useState('Copy To Clipboard');
    // Create a state variable for the copy icon
    const [copyIcon, setCopyIcon] = useState(<ContentCopyIcon />);
    // Create a state variable for the text class
    const [textClass, setTextClass] = useState('');
    const ref = React.createRef();
    const inputProps = {
        className: "string-input",
    }
    const InputProps = {
        endAdornment: <InputAdornment
            // Change the cursor style on mouse enter and leave
            onMouseEnter={(e) => {
                // Use e.currentTarget instead of e.target
                e.currentTarget.style.cursor = 'pointer'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.cursor = 'default';
            }}
            onClick={() => { ref.current.value = ''; setStringLength(0) }}
            position="end">
            <HighlightOffIcon color="success" fontSize="large" />
        </InputAdornment>
    }

    const handleCopy = (e) => {
        if (ref.current.value.length >= 1) {
            navigator.clipboard.writeText(stringlength);
            setTooltipText('Text Copied');
            setCopyIcon(<CheckCircleIcon />);
            // Wait 3 seconds and toggle the icon and the tooltip text
            // Set the text class to flash
            setTextClass('flash');
            // Reset the text class after 1 second
            setTimeout(() => {
                setTextClass('');
            }, 1000);
            setTimeout(() => {
                setTooltipText('Copy To Clipboard');
                setCopyIcon(<ContentCopyIcon />);
            }, 3000);
        }
    }

    return (
        <div style={{ width: '80%' }}>
            <h1>Online Character Counter : Calculate String Length</h1>

            <Stack spacing={2}>

                <Box sx={{ width: '100%', margin: 'auto' }}><TextField
                    id="outlined-multiline-static"
                    label="Your Input Text"
                    placeholder="Place your text here ..."
                    rows={4}
                    color="success"
                    multiline
                    fullWidth
                    focused
                    InputLabelProps={{ style: { fontWeight: 'bolder' } }}
                    onChange={(event) => { setStringLength(event.target.value.length) }}
                    InputProps={InputProps}
                    inputProps={inputProps}
                    inputRef={ref}
                />
                </Box>
                <Box sx={{ marginTop: '10px', width: '100%', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <InputLabel sx={{ marginLeft: '5px', textAlign: 'left' }}>
                                <strong
                                    className={textClass}
                                    style={{ color: 'greenyellow', marginRight: '10%', fontSize: '22px' }}>
                                    {stringlength}
                                </strong>
                                <Tooltip title={tooltipText}>
                                    <IconButton
                                        onClick={handleCopy}
                                        color="info"
                                        sx={{ fontSize: '22px' }}>
                                        {copyIcon}
                                    </IconButton>
                                </Tooltip>
                            </InputLabel>

                        </Grid>
                        <Grid item xs={6} md={8}>
                            <InputLabel sx={{ color: 'white', margin: '5px', textAlign: 'right' }}>Size : <strong style={{ color: "mediumspringgreen" }}>{stringlength}</strong> B(Byte), <strong>{stringlength}</strong> Characters</InputLabel>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography align="center" fontSize={26} paragraph>Your text size is <strong style={{ color: 'aqua' }}>{stringlength}</strong> characters</Typography>
                </Box>
                <Box id="custom-blog" sx={{ marginLeft: '10px', marginRight: '10px' }}>
                    <h2 align="left">Calculate String Length Online</h2>
                    <Typography align="left" fontSize={18} paragraph>
                        Calculate String Length is easy to use tool to count the characters in provided string. Copy, Paste and Calculate Length.
                    </Typography>

                    <h2 align="left">What is a string?</h2>
                    <Typography align="left" fontSize={18} paragraph>
                        A string is a sequence of characters, such as letters, numbers, symbols, and punctuation marks.<br />
                        A string can be used to represent text, such as a word, a sentence, or a paragraph.<br />
                        For example, "Hello world!" is a string that contains 12 characters.
                    </Typography>
                    <h2 align="left">How to represent a string mathematically?</h2>
                    <Typography align="left" fontSize={18} paragraph>
                        One way to represent a string mathematically is to use a function that maps each character in the string to a unique natural number.<br />
                        For example, we can use the ASCII code to assign a number between 0 and 127 to each character in the standard ASCII set.<br />
                        For example, the ASCII code of "H" is 72, the ASCII code of "e" is 101, and so on.<br />
                        Using this function, we can write the string "Hello" as:
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        <span style={{ color: "#3c98de", fontWeight: "900" }}>f("Hello") = (72, 101, 108, 108, 111)</span>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        This is called a tuple, which is an ordered list of elements enclosed by parentheses. A tuple can be seen as a mathematical object that has some properties and operations defined on it.
                    </Typography>
                    <h2 align="left">How to measure the length of a string mathematically?</h2>
                    <Typography align="left" fontSize={18} paragraph>
                        One property of a tuple is its length, which is the number of elements it contains. For example, the length of the tuple (72, 101, 108, 108, 111) is 5.<br />
                        Therefore, one way to measure the length of a string mathematically is to find the length of the tuple that represents it. For example, the length of the string "Hello" is:
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        <span style={{ color: "#3c98de", fontWeight: "900" }}>len(f("Hello")) = len((72, 101, 108, 108, 111)) = 5</span>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        But how can we find the length of a tuple without using any built-in functions? One way is to use recursion, which is a technique that involves defining a function in terms of itself.<br />
                        For example, we can define a recursive function that takes a tuple as an input and returns its length as an output. The function works as follows:
                    </Typography>
                    <List>
                        <ListItem>If the tuple is empty (has no elements), then return 0.</ListItem>
                        <ListItem>Otherwise (the tuple has at least one element), then remove the first element from the tuple and call the function again with the remaining tuple. Add 1 to the result and return it.</ListItem>
                    </List>
                    <Typography align="left" fontSize={18} paragraph>
                        For example, if we apply this function to the tuple (72, 101), we get:
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        <span style={{ color: "#3c98de", fontWeight: "900" }}>len((72, 101)) = len((101)) + 1 = len(()) + 1 + 1 = 0 + 1 + 1 = 2</span>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        Using this recursive function, we can measure the length of any string by applying it to the tuple that represents it. For example, the length of the string "Hello world!" is:
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        <span style={{ color: "#3c98de", fontWeight: "900" }}>len(f("Hello world!")) = len((72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33)) = len((101, 108 ... ,100 ,33)) +1<br />
                            = len((108 ... ,100 ,33)) +2<br />
                            = len((108 ... ,33)) +3<br />
                            = len((111 ... ,33)) +4<br />
                            = len((32 ... ,33)) +5<br />
                            = len((119 ... ,33)) +6<br />
                            = len((111 ... ,33)) +7<br />
                            = len((114 ... ,33)) +8<br />
                            = len((108 ... ,33)) +9<br />
                            = len((100 ... ,33)) +10<br />
                            = len((33)) +11<br />
                            = len(()) +12<br />
                            =0+12<br />
                            =12</span>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        I hope this blog post has helped you understand how to calculate the length of a string without using built-in functions mathematically.<br />
                        Thank you for reading! 😊
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        (1) <a style={{textDecoration: 'none', color: 'violet'}} href="https://stackoverflow.com/questions/3992192/string-length-without-len-function">python - String length without len function - Stack Overflow</a>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        (2) <a style={{textDecoration: 'none', color: 'violet'}} href="https://stackoverflow.com/questions/52681929/calculate-length-of-string-without-using-strlen-function">Calculate length of string without using strlen() function</a>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        (3) <a style={{textDecoration: 'none', color: 'violet'}} href="https://python.plainenglish.io/find-the-length-of-string-without-using-len-function-in-python-e9621e1fa0c8">Find the Length of a String Without Using len Function in Python</a>
                    </Typography>
                    <Typography align="left" fontSize={18} paragraph>
                        (4) <a style={{textDecoration: 'none', color: 'violet'}} href="https://stackoverflow.com/questions/16343264/calculate-length-of-a-string-without-using-standard-library-funcionslike-strlen">c++ - calculate length of a string without using standard library</a>
                    </Typography>

                </Box>
            </Stack>
        </div>
    );
}

export default StringLength;






