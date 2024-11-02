import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AuthenticatedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="flex-grow">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
