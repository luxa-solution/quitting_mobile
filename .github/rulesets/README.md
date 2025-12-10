# GitHub Rulesets (Source of Truth)

This folder contains the JSON definitions for this repository’s GitHub Rulesets.

⚠️ **Important:**  
GitHub does **not** read or apply rulesets directly from this folder.  
The files here are _ignored by GitHub itself_ and are stored only for documentation and version control.

## Why this folder exists

- Version control for all Ruleset configurations
- Easier code review and collaboration
- Clear history of changes to branch protection
- A single, organized place to store importable ruleset files

## How to update the rulesets

1. Edit the JSON files in this folder as needed.
2. Commit and merge your changes into the `main` branch.
3. Manually import the updated JSON into GitHub via:  
   **Repository Settings → Rules → Import ruleset**

### Notes

- GitHub does _not_ automatically apply the JSON files from this folder.
- Updating rulesets requires manually importing them each time you make changes.
- Editing rules directly in the GitHub UI will **not** sync back to these files — update the JSON here if you want changes reflected in version control.
