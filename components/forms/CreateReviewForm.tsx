"use client";

// import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import RateInput from "../RateInput";
import { IReviewFormProps } from "@/types";
import { FormSteps, initalState, rateInputArray } from "@/constants";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { CreateReviewAction } from "@/actions/reviews.actions";



export default function CreateReviewForm({ userId, flightId }: IReviewFormProps) {
    const [state, formAction] = useFormState(CreateReviewAction, initalState);

    const [step, setStep] = useState(0);
    const [selectedRating, setSelectedRating] = useState({});

    const handleRatingChange = (name: string, value: string) => {
        setSelectedRating(prevRatings => ({
            ...prevRatings,
            [name]: value,
        }));
    };

    const isLastStep = step === FormSteps.length - 1;
    const isFirstStep = step === 0;

    const handleNext = () => setStep((prev) => Math.min(prev + 1, FormSteps.length - 1));
    const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 0));

    useEffect(() => {
        if (state.status === "success") {
            toast.success(state.message);
            redirect("/home");
        } else if (state.status === "error") {
            toast.error(state.message);
        }
    }, [state.status, state.message, state.errors])


    useEffect(() => {
        console.log(userId)
        console.log(flightId)
    })


    return (
        <div className="flex flex-col relative">
            <form
                className="flex-grow"
                action={formAction}
            >
                <div className="flex flex-col gap-y-2">
                    <input
                        name="userId"
                        type="hidden"
                        defaultValue={userId}
                        value={userId}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        name="flightId"
                        type="hidden"
                        defaultValue={flightId}
                        value={flightId}
                    />
                </div>

                <div className="review-rows">
                    {step === 0 && (
                        <>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Counter Service</Label>
                                <RadioGroup
                                    name="counterServiceRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="counterServiceRating"
                                                onChange={() => handleRatingChange("counterServiceRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Waiting Time</Label>
                                <RadioGroup
                                    name="waitingTimeRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="waitingTimeRating"
                                                onChange={() => handleRatingChange("waitingTimeRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Boarding Organization</Label>
                                <RadioGroup
                                    name="boardingOrganizationRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="boardingOrganizationRating"
                                                onChange={() => handleRatingChange("boardingOrganizationRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Time Departure</Label>
                                <RadioGroup
                                    name="onTimeDepartureRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="onTimeDepartureRating"
                                                onChange={() => handleRatingChange("onTimeDepartureRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">cleanliness</Label>
                                <RadioGroup
                                    name="cleanliness"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="cleanliness"
                                                onChange={() => handleRatingChange("cleanliness", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Crew Service</Label>
                                <RadioGroup
                                    name="crewServiceRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="crewServiceRating"
                                                onChange={() => handleRatingChange("crewServiceRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Food Quality</Label>
                                <RadioGroup
                                    name="foodQualityRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="foodQualityRating"
                                                onChange={() => handleRatingChange("foodQualityRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Entertainment</Label>
                                <RadioGroup
                                    name="entertainmentRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="entertainmentRating"
                                                onChange={() => handleRatingChange("entertainmentRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Captain Performance</Label>
                                <RadioGroup
                                    name="captainPerformanceRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="captainPerformanceRating"
                                                onChange={() => handleRatingChange("captainPerformanceRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Take Off Landing</Label>
                                <RadioGroup
                                    name="takeoffLandingRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="takeoffLandingRating"
                                                onChange={() => handleRatingChange("takeoffLandingRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Comfort</Label>
                                <RadioGroup
                                    name="comfortRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="comfortRating"
                                                onChange={() => handleRatingChange("comfortRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Time Arrival</Label>
                                <RadioGroup
                                    name="onTimeArrivalRating"
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="onTimeArrivalRating"
                                                onChange={() => handleRatingChange("onTimeArrivalRating", String(item))}
                                                selectedValue={selectedRating}
                                            />
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="">
                                <Label className="text-lg py-4 block">Comments</Label>
                                <Textarea
                                    name="comments"
                                    placeholder="Leave any comments you wnat..."
                                    className=""
                                />
                            </div>
                        </>
                    )}
                </div>
                {isLastStep && <Button
                    type="submit"
                    className="absolute -bottom-1 right-0 mb-1"
                >
                    Add Review
                </Button>
                }
            </form >
            <div className="mt-6 flex justify-between items-end h-full">
                <Button
                    disabled={isFirstStep}
                    className="disabled:cursor-not-allowed"
                    type="button"
                    onClick={handlePrevious}
                >
                    Prev
                </Button>
                {!isLastStep &&
                    <Button
                        disabled={isLastStep}
                        className="disabled:cursor-not-allowed"
                        type="button"
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                }
            </div>
        </div>
    )
}
