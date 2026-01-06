import "./Candidate.css";
import { STATE_2CHAR } from "../../../data/info";
import type { CandidateProps } from "../../../data/props";

// This is the actual Candidate component with their information
export default function Candidate({
    bioguide_id,
    name,
    state,
    district,
    party,
    office,
}: CandidateProps) {
    const stateLabel =
        state in STATE_2CHAR
            ? STATE_2CHAR[state as keyof typeof STATE_2CHAR]
            : state;

    return (
        <div className="candidate-profile">
            <div className="candidate-header">
                <img
                    src={`https://unitedstates.github.io/images/congress/450x550/${bioguide_id}.jpg`}
                    alt={`${name}'s Portrait`}
                    className="candidate-image"
                />

                <div className="candidate-bio">
                    <h1 className="candidate-name">{name}</h1>

                    {office === "SENATE" && (
                        <div className="candidate-role">
                            U.S. Senator for {stateLabel}
                        </div>
                    )}

                    {office === "HOUSE" && (
                        <div className="candidate-role">
                            U.S. Representative — {stateLabel}-{district}
                        </div>
                    )}

                    <div className="candidate-party">{party}</div>
                </div>
            </div>

            <h6 className="candidate-id">BioGuide ID: {bioguide_id} | FEC ID: { }</h6>

            <button className="close-button">
                Close Profile
            </button>
        </div>
    )
}