import type { ResultsCountComponentProps } from "@/types/searchResultsTypes";

export const ResultsCountComponent = ({ searchQuery, resultsCount }: ResultsCountComponentProps) => {
    return (
        <p className="text-sm text-muted-foreground mb-6">
            {searchQuery
                ? `Showing ${resultsCount} results for "${searchQuery}"`
                : `${resultsCount} restaurants available`}
        </p>
    );
};