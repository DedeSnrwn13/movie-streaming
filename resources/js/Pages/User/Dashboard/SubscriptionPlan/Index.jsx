import React from "react";
import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { router, Head } from "@inertiajs/react";

const SubscriptionPlan = ({ auth, subscriptionPlans, env }) => {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function (result) {
                console.log("success");
                console.log({ result });
            },
            // Optional
            onPending: function (result) {
                console.log("pending");
                console.log({ result });
            },
            // Optional
            onError: function (result) {
                console.log("error");
                console.log({ result });
            },
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Subscription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENT_KEY}
                ></script>
            </Head>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* START: Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        {/* Pricing Card */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            {subscriptionPlans.map((subscriptionPlan) => (
                                <SubscriptionCard
                                    name={subscriptionPlan.name}
                                    price={subscriptionPlan.price}
                                    durationInMonth={
                                        subscriptionPlan.active_period_in_months
                                    }
                                    features={JSON.parse(
                                        subscriptionPlan.features
                                    )}
                                    isPremium={
                                        subscriptionPlan.name === "Premium"
                                    }
                                    key={subscriptionPlan.id}
                                    onSelectSubscription={() =>
                                        selectSubscription(subscriptionPlan.id)
                                    }
                                />
                            ))}
                        </div>
                        {/* /Pricing Card */}
                    </div>
                </div>
                {/* END: Content */}
            </div>
        </Authenticated>
    );
};

export default SubscriptionPlan;
