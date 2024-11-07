/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import RateInput from "../RateInput";
import { IReviewFormProps } from "@/types";
import { FormSteps, rateInputArray } from "@/constants";
import { FormEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateReviewForm({ userId, flightId }: IReviewFormProps) {
    const router = useRouter();
    
    if(!userId) {
        router.push('/sing-in');
    }

    const [step, setStep] = useState(0);
    const [selectedRating, setSelectedRating] = useState({});
    const [ratings, setRatings] = useState({
        counterServiceRating: "",
        waitingTimeRating: "",
        boardingOrganizationRating: "",
        onTimeDepartureRating: "",
        cleanlinessRating: "",
        crewServiceRating: "",
        foodQualityRating: "",
        entertainmentRating: "",
        captainPerformanceRating: "",
        takeoffLandingRating: "",
        comfortRating: "",
        onTimeArrivalRating: "",
    });
    const [comments, setComments] = useState("");

    const isLastStep = step === FormSteps.length - 1;
    const isFirstStep = step === 0;

    const handleNext = () => setStep((prev) => Math.min(prev + 1, FormSteps.length - 1));

    const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 0));

    const handleRatingChange = (name: string, value: string) => {
        setSelectedRating((prevRatings) => ({
            ...prevRatings,
            [name]: value,
        }));
    };

    const handleInputsChange = (name: string, value: string) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = {
            ...ratings,
            comments,
            userId,
            flightId,
        };

        const res = await fetch("/api/reviews/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await res.json();

        if (result.status === "success") {
            toast.success(result.message); 
            router.push('/home');
        } else {
            toast.error(result.message);
        }
        
    };

    return (
        <div className="flex flex-col relative">
            <form
                className="flex-grow"
                method="post"
                onSubmit={(e: FormEvent) => handleSubmit(e)}
            >
                <div className="flex flex-col gap-y-2">
                    <input
                        name="userId"
                        type="hidden"
                        defaultValue={userId}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        name="flightId"
                        type="hidden"
                        defaultValue={flightId}
                    />
                </div>

                <div className="review-rows">
                    {step === 0 && (
                        <>
                            <div className="flex gap-4 items-center justify-between py-4 px-2">
                                <Label className="text-lg">Counter Service</Label>
                                <RadioGroup
                                    name="counterServiceRating"
                                    onChange={(e) => handleInputsChange("counterServiceRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("waitingTimeRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("boardingOrganizationRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("onTimeDepartureRating", (e.target as HTMLInputElement).value)}
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
                                    name="cleanlinessRating"
                                    onChange={(e) => handleInputsChange("cleanlinessRating", (e.target as HTMLInputElement).value)}
                                >
                                    <div className="flex items-center gap-2">
                                        {rateInputArray.map(item => (
                                            <RateInput
                                                id={String(item)}
                                                value={String(item)}
                                                key={item}
                                                name="cleanlinessRating"
                                                onChange={() => handleRatingChange("cleanlinessRating", String(item))}
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
                                    onChange={(e) => handleInputsChange("crewServiceRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("foodQualityRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("entertainmentRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("captainPerformanceRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("takeoffLandingRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("comfortRating", (e.target as HTMLInputElement).value)}
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
                                    onChange={(e) => handleInputsChange("onTimeArrivalRating", (e.target as HTMLInputElement).value)}
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
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
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
