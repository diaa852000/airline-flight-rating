import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AuthenticatedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <div className="flex-grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
