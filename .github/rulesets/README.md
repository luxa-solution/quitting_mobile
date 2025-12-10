# GitHub Rulesets (Source of Truth)

This folder contains the JSON definitions for this repository’s GitHub Rulesets.

⚠️ **Important:**  
GitHub does **not** read or apply rulesets directly from this folder.  
The files here are _ignored by GitHub itself_.

A GitHub Action located in `.github/workflows/sync-rulesets.yml` reads these files and uses the
GitHub API to create or update the actual Rulesets in:  
**Repository Settings → Rules → Rulesets**

## Why this folder exists

- Version control for Rulesets
- Easier code review and collaboration
- Full history of rule changes
- Automated synchronization via workflow

## How to update the rules

1. Edit the JSON files in this folder.
2. Commit and merge to the `main` branch.
3. The workflow automatically updates the live Rulesets in GitHub.

Do **not** edit Rulesets manually in the GitHub UI unless instructed — your changes will be overwritten by the workflow on the next sync.
