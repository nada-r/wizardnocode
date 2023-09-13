import React from 'react';

const Step1: React.FC = () => {
    const [selectedScenario, setSelectedScenario] = React.useState<string | null>(null);

    return (
        <div>
            <h2>Select a Scenario for your Web3 Campaign</h2>
            <select onChange={(e) => setSelectedScenario(e.target.value)}>
                <option value="scenario1">Scenario 1</option>
                <option value="scenario2">Scenario 2</option>
                <option value="scenario3">Scenario 3</option>
                {/* Add as many scenarios as you have */}
            </select>

            <button onClick={() => {
                if (selectedScenario) {
                    // Navigate to the next step or save the selected scenario in the state
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
