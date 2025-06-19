// pages/MyAccordionPage.tsx
import { AccordionItem } from "../components/Accordion";

const MyAccordionPage = () => {
    return (
        <div className="max-w-2xl mx-auto mt-4">
            <AccordionItem title="Job description">
                <p className="mb-2 text-sm">
                    Global IT support for our client via Phone, Email, Remote
                    Session, and Chat. Assigning tickets to correct resolving
                    group.
                </p>

                {/* Nested Accordion */}
                <div className="mt-4">
                    <AccordionItem title="Tasks">
                        <p>
                            Flowbite is MIT licensed, while Tailwind UI is a
                            paid product.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Architecture">
                        <p>
                            Flowbite uses smaller, reusable components vs.
                            Tailwind UI's section-based approach.
                        </p>
                    </AccordionItem>
                </div>
            </AccordionItem>
        </div>
    );
};

export default MyAccordionPage;
