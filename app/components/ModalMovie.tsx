import {useState, useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import { Movie } from '@/interfaces/movie';

interface ModalViewProps {
    handleClose: (event: React.SyntheticEvent) => void; 
    open: boolean;
    movie: Movie
}

export const ModalMovie: React.FC<ModalViewProps>  = ({handleClose, open, movie}) =>{

    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
      };

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style} className="flex flex-col items-start gap-7 rounded-md w-screen xl:w-fit overflow-y-scroll xl:overflow-auto h-screen xl:h-fit">
        <Box className="flex w-full flex-row-reverse justify-center items-center">
        <ClearIcon className='cursor-pointer self-center' onClick={handleClose}></ClearIcon>
        <Typography id="modal-modal-title" variant="h4" component="span" className='text-4xl w-full font-bold text-center xl:text-left'>
        {movie.title}
      </Typography>
        </Box>
      <Box className="flex justify-center items-center md:items-start gap-3 flex-col md:flex-row ">
      <Image
        src={process.env.NEXT_PUBLIC_POSTER_PATH + movie.poster_path}
        alt="tittle"
        width={320}
        height={384}
        loading='lazy'
        decoding='async'
        className='rounded-md bg-gray-400 w-60 xl:w-80 h-96'
      />
      <Typography id="modal-modal-description" className='flex flex-col gap-3'>
        <span className='font-bold text-2xl'>{movie.title}</span>
        <span><span className='font-bold'>Título Original:</span> {movie.original_title} </span>
        <span><span className='font-bold'>Descripción:</span> {movie.overview}</span>
        <span><span className='font-bold'>Lanzamiento:</span> {movie.release_date}</span>
        <span><span className='font-bold'>Calificación:</span> {movie.vote_average} </span>
      </Typography>
      </Box>
    </Box>
  </Modal>
  )
}
