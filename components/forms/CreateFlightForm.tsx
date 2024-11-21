"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import { useFormState } from "react-dom";
import { CreateFlightAction } from "@/actions/flights.actions";
import { initalState } from "@/constants";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
import moment from 'moment';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateFlightForm() {
    const [state, formAction] = useFormState(CreateFlightAction, initalState);
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (state.status === "success") {   
            toast.success(state.message);
            redirect("/home");
        } else if (state.status === "error") {
            toast.error(state.message);
        }
    }, [state.status, state.message, state.errors]);

    const [startTime, setStartTime] = useState<moment.Moment | null>(null);
    const [endTime, setEndTime] = useState<moment.Moment | null>(null);

    const onStartTimeChange = (value: moment.Moment | string) => {
        setStartTime(moment.isMoment(value) ? value : moment(value));
    }
    
    const onEndTimeChange = (value: moment.Moment | string) => {
        setEndTime(moment.isMoment(value) ? value : moment(value));
    }

    return (
        <form action={formAction}>
            <CardHeader>
                <CardTitle>Create Trip</CardTitle>
                <CardDescription className="text-lg flex items-center gap-1">
                    <span>
                        Fill out a description for the trip
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-5 flex-grow">
                <div className="flex flex-col gap-y-2">
                    <Label>Name</Label>
                    <Input
                        name="name"
                        type="text"
                    />
                    {state?.errors?.["name"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Flight Number</Label>
                    <Input
                        name="flightNumber"
                        type="text"
                    />
                    {state?.errors?.["flightNumber"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["flightNumber"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Price</Label>
                    <Input
                        name="price"
                        type="number"
                    />
                    {state?.errors?.["price"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["price"]?.[0]}</p>
                    )}
                </div>
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col gap-y-2 flex-1">
                        <Label>From</Label>
                        <Select name="fromCountry">
                            <SelectTrigger className="w-full min-w-[180px]">
                                <SelectValue placeholder="Select your Country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="egypt">Egypt</SelectItem>
                                <SelectItem value="japan">Japan</SelectItem>
                                <SelectItem value="usa">USA</SelectItem>
                            </SelectContent>
                        </Select>
                        {state?.errors?.["fromCountry"]?.[0] && (
                            <p className="text-destructive">{state?.errors?.["fromCountry"]?.[0]}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-2 flex-1">
                        <Label>Destination</Label>
                        <Select name="toCountry">
                            <SelectTrigger className="w-full min-w-[180px]">
                                <SelectValue placeholder="Select Destination" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="egypt">Egypt</SelectItem>
                                <SelectItem value="japan">Japan</SelectItem>
                                <SelectItem value="usa">USA</SelectItem>
                            </SelectContent>
                        </Select>
                        {state?.errors?.["toCountry"]?.[0] && (
                            <p className="text-destructive">{state?.errors?.["toCountry"]?.[0]}</p>
                        )}
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col gap-y-2 flex-1">
                        <input
                            type="hidden"
                            name="startTime"
                            value={endTime ? endTime.format('YYYY-MM-DD HH:mm') : ''} 
                        />
                        <Label>Start Time</Label>
                        <Datetime
                            value={startTime ?? undefined}
                            onChange={onStartTimeChange}
                            inputProps={{
                                placeholder: "Choose Flight Start Date & Time",
                            }}
                        />
                        {state?.errors?.["startTime"]?.[0] && (
                            <p className="text-destructive">{state?.errors?.["startTime"]?.[0]}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-2 flex-1">
                        <input
                            type="hidden"
                            name="endTime"
                            value={endTime ? endTime.format('YYYY-MM-DD HH:mm') : ''} 
                        />
                        <Label>End Time</Label>
                        <Datetime
                            value={endTime ?? undefined}
                            onChange={onEndTimeChange}
                            inputProps={{
                                placeholder: "Choose Flight End Date & Time",
                            }}
                        />
                        {state?.errors?.["endTime"]?.[0] && (
                            <p className="text-destructive">{state?.errors?.["endTime"]?.[0]}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    <Label>Small Description</Label>
                    <Textarea
                        name="smallDescription"
                        minLength={10}
                        placeholder="Tell a brief about your journey..."
                    />
                    {state?.errors?.["smallDescription"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["smallDescription"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        type="hidden"
                        name="description"
                        value={JSON.stringify(description)}
                    />
                    <Label>Description</Label>
                    <ReactQuill
                        value={description}
                        onChange={setDescription}
                        placeholder="Tell your journey..."
                        className="h-[150px] border rounded"
                        theme="bubble"
                    />
                    {state?.errors?.["description"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["description"]?.[0]}</p>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button type="submit">
                    Create
                </Button>
            </CardFooter>
        </form>
    )
}
