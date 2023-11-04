import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './movieCard.css';
import { Movie } from '@/interfaces/movie';

interface MovieCardViewProps {
  handleOpen: (movie: Movie) => void; 
  movie : Movie;
}
export const MovieCard : React.FC<MovieCardViewProps> = ({movie, handleOpen}) => {
  const handleOpenModal = () => {
    handleOpen(movie);
  }

  return (
    <>
      <Card sx={{ maxWidth: 328 }} className='min-w-[250px] max-w-[250px] text-white' onClick={handleOpenModal}>
        <CardActionArea className='min-w-[250px] max-w-[250px] '>
          <CardMedia
            className='h-80 w-48 min-w-[250px] max-w-[250px]'
            component="img"
            width={48}
            image={process.env.NEXT_PUBLIC_POSTER_PATH + movie.poster_path}
            alt="poster"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
