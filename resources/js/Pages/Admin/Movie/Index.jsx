import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton type={"button"} className={"w-40 mb-8"}>
                    Insert New Movie
                </PrimaryButton>
            </Link>
        </Authenticated>
    );
}
