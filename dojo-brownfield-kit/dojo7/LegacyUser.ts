interface LegacyUser {
  id: string;
  fullName: string; // The legacy field
}

interface NewUser {
  id: string;
  firstName: string;
  lastName: string;
  isManualReviewNeeded: boolean;
}

function migrate(csvData: string) {
  const lines = csvData.split('\n');
  
  lines.forEach(line => {
    const cols = line.split(',');
    const oldName = cols[1]; // "Jean Dupont"

    // YOUR MISSION: Implement logic here with AI
    // const { first, last } = splitName(oldName);

    console.log(`Processing ${oldName}...`);
  });
}