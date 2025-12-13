import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { faqs } from "@/data/mockData";
import { HelpSupportHeaderComponent } from "@/components/help-support/HelpSupportHeaderComponent";
import { HelpSearchComponent } from "@/components/help-support/HelpSearchComponent";
import { ContactOptionsComponent } from "@/components/help-support/ContactOptionsComponent";
import { FAQCategoriesComponent } from "@/components/help-support/FAQCategoriesComponent";
import { FAQAccordionComponent } from "@/components/help-support/FAQAccordionComponent";
import { StillNeedHelpComponent } from "@/components/help-support/StillNeedHelpComponent";

export default function HelpSupport() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = ["all", ...new Set(faqs.map((f) => f.category))];

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <HelpSupportHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <HelpSearchComponent
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <ContactOptionsComponent />

                <FAQCategoriesComponent
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <FAQAccordionComponent faqs={filteredFaqs} />

                <StillNeedHelpComponent />
            </main>

            <BottomNav />
        </div>
    );
}