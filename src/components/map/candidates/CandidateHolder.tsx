import "./Candidate.css";
import { CandidateInfo } from "../candidates";

export default function CandidateHolder() {
    return (
        <div className="candidate-holder">
            <h1>Select Politician</h1>

            <div className="candidate-list">
                <CandidateInfo name="Cory A. Booker" state="NJ" district={null} party="Democrat" position="SENATE" />
                <CandidateInfo name="Nellie A. Pou" state="NJ" district="9" party="Democrat" position="HOUSE" />
            </div>

            <button className="close-button">
                Close List
            </button>
        </div>
    )
}