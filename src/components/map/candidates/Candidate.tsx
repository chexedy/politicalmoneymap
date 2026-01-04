import "./Candidate.css";
import { PARTIES, STATE_2CHAR } from "../../../data/info";
import type { CandidateProps } from "../../../data/props";

// This is the actual Candidate component with their information
export default function Candidate({
    bioguide_id,
    name,
    state,
    district,
    party,
    position,
}: CandidateProps) {
    const partyLabel =
        party in PARTIES
            ? PARTIES[party as keyof typeof PARTIES]
            : party;

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

                <div className="candidate-info">
                    <h1 className="candidate-name">{name}</h1>

                    {position === "SENATE" && (
                        <div className="candidate-role">
                            U.S. Senator — {stateLabel}
                        </div>
                    )}

                    {position === "HOUSE" && (
                        <div className="candidate-role">
                            U.S. Representative — {stateLabel}-{district}
                        </div>
                    )}

                    <div className="candidate-party">{party}</div>
                </div>
            </div>

            <button className="close-button">
                Close Profile
            </button>
        </div>
    )
}