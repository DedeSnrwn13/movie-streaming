import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";

const Dashboard = () => {
    return (
        <>
            <Head title="Dasboard" />
            <Authenticated />
        </>
    );
};

export default Dashboard;
