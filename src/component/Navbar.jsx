import React from 'react'
import { FaSearch } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = () => {

    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography className='!font-bold' variant="caption" component="div" color="text.secondary">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <div className='py-2 flex flex-wrap bg-white shadow-sm'>

            <button className="logo text-2xl font-bold flex items-center justify-center">
                <div className='bg-black text-white h-10 w-10 font-bold rounded-full flex justify-center items-center m-3 '>B</div>
                Project Dashboard
            </button>

            <div className="flex gap-2 md:absolute ml-4 md:ml-0 right-4 py-3 flex-wrap">
                <div className='flex items-center bg-[#eee] md:p-1 rounded-md shadow-sm cursor-pointer h-11 w-44 md:w-72 pl-1 '>
                    <FaSearch className='ml-1' />
                    <input
                        className="bg-transparent rounded-md p-2 mx-1 w-inherit outline-none"
                        placeholder="search"
                        type="search"
                    />
                </div>
                <div className="flex items-center justify-center gap-3 bg-[#EAF5FB] py-1 px-2 rounded-md font-bold cursor-pointer">
                    <CircularProgressWithLabel value={62} />
                    <p>Quick Start</p>
                </div>

                <div className="bg-[#F6C481] h-10 w-10 font-bold rounded-full flex justify-center items-center cursor-pointer">J</div>
            </div>
        </div>
    )
}

export default Navbar
