import { Link } from "@inertiajs/react";
import React from "react";
import ReactPlayer from "react-player";

const Show = ({ movie }) => {
    return (
        <section
            className="mx-auto w-screen relative watching-page font-poppins"
            id="stream"
        >
            <ReactPlayer
                url={movie.video_url}
                controls
                width={"100%"}
                height={"100%"}
                className="overflow-hidden h-screen w-screen"
            >
                <p className="vjs-no-js text-twmdark">
                    To view this video please enable JavaScript, and consider
                    upgrading to a web browser that
                    <a
                        href="https://videojs.com/html5-video-support/"
                        target="_blank"
                    >
                        supports HTML5 video
                    </a>
                </p>
            </ReactPlayer>

            {/* Button back to dashboard */}
            <div className="absolute top-5 left-5 z-20">
                <Link href={route("user.dashboard.index")}>
                    <img
                        src="/icons/ic_arrow-left.svg"
                        className="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>

            {/* Video Title */}
            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    {movie.name}
                </span>
            </div>
        </section>
    );
};

export default Show;
