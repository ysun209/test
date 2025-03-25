const { execSync } = require('child_process');

// Get the current branch name
const branchName = execSync('git symbolic-ref --short HEAD', {
  encoding: 'utf8',
}).trim();

// Define allowed prefixes
const allowedPrefixes = [
  'feature/',
  'fix/',
  'hotfix/',
  'release/',
  'chore/',
  'test/',
];

// Check if the branch name matches the allowed prefixes
const isValid = allowedPrefixes.some((prefix) => branchName.startsWith(prefix));

if (!isValid) {
  console.error(
    `ERROR: Branch name '${branchName}' does not start with 'feature/', 'fix/', 'hotfix/', 'chore/', 'test/', or 'release/'`,
  );
  console.error(
    'Please rename your branch to match one of these patterns using:',
  );
  console.error('git branch -m new-branch-name');
  console.error('');
  process.exit(1); // Exit with an error code to prevent the push
}

process.exit(0); // Success
