import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";
import './movieCard.css';
import { ModalMovie } from './ModalMovie';
import { Movie } from '@/interfaces/movie';

interface MovieCardViewProps {
  movie : Movie;
}
export const MovieCard : React.FC<MovieCardViewProps> = ({movie}) => {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Card sx={{ maxWidth: 328 }} className='min-w-[250px] text-white' onClick={handleOpen}>
        <CardActionArea className='w-80'>
          <CardMedia
            className='h-80 w-48'
            component="img"
            width={48}
            image={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            alt="poster"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalMovie open={open} handleClose={handleClose} movie={movie}></ModalMovie>
    </>
  );
}
