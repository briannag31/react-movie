//code from Alex Class
const MovieDisplay = ({movie}) => {
    
    if (movie){
        return <div>
        <>
       <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h3>{movie.Plot}</h3>
        <img src={movie.Poster} alt={movie.Title} />
         </>
        </div>
    } else {
        return <h1>Search for  a movie!</h1>
    }
}


// further destructuring example
 //destructure the movie prop
// const MovieDisplay = ({ movie }) => {
//     if (movie) {
//       // destructuring properties of movie
//       const { Title, Poster, Writer } = movie;
//       return (
//         <div>
//           <h1>{Title}</h1>
//           <img src={Poster} alt={Title} />
//           <h3>{Writer}</h3>
//         </div>
//       );
//     } else {
//       return <h1>Search for a Movie</h1>;
//     }
//   };
  
//   export default MovieDisplay;




// code from notes:
//const MovieDisplay = ({movie}) =>{
//     const loaded = () => {
//     return (
//         <>
//         <h1>{movie.Title}</h1>
//         <h2>{movie.Year}</h2>
//         <h2>{movie.Plot}</h2>
//         <img src={movie.Poster} alt={movie.Title} />
//         </>
//     )
// }
// const loading = () => {
//     return <h1>Search for a movie!</h1>
// }
// return movie ? loaded() : loading()
// }

export default MovieDisplay