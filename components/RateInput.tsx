import { IRateinputProps } from "@/types";
import { Label } from "./ui/label";
import { RadioGroupItem } from "./ui/radio-group";

export default function RateInput({ id, value, name, selectedValue, onChange }: IRateinputProps) {
    const customId = `${name}-${id}`;
    const isActive = selectedValue[name] === value;

    return (
        <Label
            onClick={() => onChange(name)}
            htmlFor={customId}
            className={`w-8 h-8 bg-muted border border-muted-foreground flex items-center 
                justify-center p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors 
                ${isActive && 'bg-primary text-white font-bold'}`}
        >
            <RadioGroupItem
                value={value}
                id={customId}
                className="hidden"
                required
            />
            <span>{value}</span>
        </Label>
    )
}
