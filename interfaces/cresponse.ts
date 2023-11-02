import { Movie } from "./movie";

export interface CResponse {
  dates: {
    maximum: string;
    minimum: string;    
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}  