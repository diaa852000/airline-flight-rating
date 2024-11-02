import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/'>
            <h1 className="text-2xl font-semibold">
                Fly<span className="text-primary">Rate</span>
            </h1>
        </Link>
    )
}
