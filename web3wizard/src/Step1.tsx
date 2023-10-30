import React from 'react';

const Step1: React.FC = () => {
    const [selectedScenario, setSelectedScenario] = React.useState<string | null>(null);

    return (
        <div>
            <h2>Select a Scenario for your Web3 Campaign</h2>
            <select onChange={(e) => setSelectedScenario(e.target.value)}>
                <option value="scenario1">Create an NFT collection</option>
                <option value="scenario2">Token gate access to ticketing</option>
                <option value="scenario3">Token gate parts of your website</option>
            </select>

            <button onClick={() => {
                if (selectedScenario) {
                } else {
                    alert('Please select a scenario');
                }
            }}>
                Next
      </button>
        </div>
    );
}

export default Step1;
