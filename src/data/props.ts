export type CandidateProps = {
    bioguide_id: string;
    name: string;
    state: string;
    district: string | null;
    party: "D" | "R" | "I" | string;
    position: "SENATE" | "HOUSE" | string;
}

export type CandidateInfoProps = {
    bioguide_id: string;
    name: string;
    state: string;
    district: string | null;
    party: "D" | "R" | "I" | string;
    position: "SENATE" | "HOUSE" | string;
};