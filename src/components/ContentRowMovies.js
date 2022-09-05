import react from "react";

import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LasMovieInDb";

export default function ContentRowMoviesOnDb(){
    return(
        // {/* <!-- Content Row Last Movie in Data Base --> */}
				<div className="row">
                    {/* <!-- Last Movie in DB --> */}
                    <LastMovieInDb />
                    {/* <!-- End content row last movie in Data Base --> */}

                    {/* <!-- Genres in DB --> */}
                    <GenresInDb />
                </div>
    )
}