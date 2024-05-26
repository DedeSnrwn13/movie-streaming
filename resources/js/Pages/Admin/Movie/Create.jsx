import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import Input from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel htmlFor="name" value={"Name"} />
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            variant="primary-outline"
                            placeholder="Enter the name of te movie"
                            isFocused={true}
                            onChange={onHandleChange}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="category" value={"Category"} />
                        <Input
                            id="category"
                            type="text"
                            name="category"
                            variant="primary-outline"
                            placeholder="Enter the category of te movie"
                            onChange={onHandleChange}
                        />
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="video_url" value={"Video URL"} />
                        <Input
                            id="video_url"
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            placeholder="Enter the video url of te movie"
                            onChange={onHandleChange}
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="thumbnail" value={"Thumbnail"} />
                        <Input
                            id="thumbnail"
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            onChange={onHandleChange}
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="rating" value={"Rating"} />
                        <Input
                            id="rating"
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            placeholder="Enter the rating of te movie"
                            onChange={onHandleChange}
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>

                    <div className="flex flex-row items-center">
                        <InputLabel
                            htmlFor="is_featured"
                            value={"Is Featured"}
                        />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            className="ms-3 mb-2"
                        />
                        <InputError
                            message={errors.is_featured}
                            className="mt-2"
                        />
                    </div>

                    <PrimaryButton
                        type="submit"
                        className="mt-4"
                        processing={processing}
                    >
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </Authenticated>
    );
}
