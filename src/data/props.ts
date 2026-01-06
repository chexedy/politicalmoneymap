export type CandidateProps = {
    bioguide_id: string;
    name: string;
    state: string;
    district: string | null;
    party: "D" | "R" | "I" | string;
    office: "SENATE" | "HOUSE" | string;
}

export type CandidateInfoProps = {
    name: string;
    state: string;
    district: string | null;
    party: "D" | "R" | "I" | string;
    office: "SENATE" | "HOUSE" | string;
};