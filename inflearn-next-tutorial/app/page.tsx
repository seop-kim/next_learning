import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <main>Home</main>
            <Link href="/dashboard">Go T Dashboard</Link>
        </div>
    );
}
