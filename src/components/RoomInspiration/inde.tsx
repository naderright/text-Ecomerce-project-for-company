import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";


export default function SectionWrapper() {
    return (
        <section className=" bg-pink py-12  w-full">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>

        </section>
    )
}