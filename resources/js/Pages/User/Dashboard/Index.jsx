import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

const Dashboard = ({ auth, featuredMovies, movies }) => {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Authenticated auth={auth}>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity
                        className="gap-[30px] __scroll-selector"
                        options={flickityOptions}
                    >
                        {featuredMovies.map((featuredMovie) => (
                            <FeaturedMovie
                                key={featuredMovie.id}
                                slug={featuredMovie.slug}
                                name={featuredMovie.name}
                                category={featuredMovie.category}
                                thumbnail={featuredMovie.thumbnail}
                                rating={featuredMovie.rating}
                            />
                        ))}
                    </Flickity>
                </div>

                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity
                        className="__scroll-selector"
                        options={flickityOptions}
                    >
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                slug={movie.slug}
                                name={movie.name}
                                category={movie.category}
                                thumbnail={movie.thumbnail}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
};

export default Dashboard;
