import Image from "next/image";
import Counter from "@/app/components/counter";
import Counter2 from "@/app/components/counter2";

export default function Home() {
    return (
        <div className="flex justify-center gap-2">
            <div>
                <Counter></Counter>
            </div>
            <div>
                <Counter2></Counter2>
            </div>
        </div>
    );
}
