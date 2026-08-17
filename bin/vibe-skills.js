#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2] || 'help';
const skillName = process.argv[3];

console.log(`\x1b[35m⚡ Vibe Skills CLI v1.3.0 — Mega-Library of 23 Standard Agent Skills\x1b[0m\n`);

const skillsDir = path.join(__dirname, '..', 'skills');

if (command === 'list') {
  if (!fs.existsSync(skillsDir)) {
    console.log(`No skills directory found.`);
    process.exit(0);
  }
  const skills = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
  console.log(`\x1b[36mAvailable Standard Agent Skills (${skills.length} total):\x1b[0m`);
  skills.forEach(s => {
    console.log(`  ● \x1b[32m${s}\x1b[0m`);
  });
  console.log(`\n\x1b[90mRun 'npx vibe-skills add <skill-name>' to install any skill locally.\x1b[0m`);
} else if (command === 'add' || command === 'install') {
  if (!skillName) {
    console.log(`\x1b[31mPlease specify a skill to install. Example: npx vibe-skills add code-review\x1b[0m`);
    process.exit(1);
  }

  const srcSkill = path.join(skillsDir, skillName);
  if (!fs.existsSync(srcSkill)) {
    console.log(`\x1b[31mError: Skill '${skillName}' not found in registry.\x1b[0m`);
    console.log(`Run 'npx vibe-skills list' to see all available skills.`);
    process.exit(1);
  }

  // Target directory: .antigravity/skills/<skill-name>
  const targetDir = path.join(process.cwd(), '.antigravity', 'skills', skillName);
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy recursive
  function copyRecursive(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  copyRecursive(srcSkill, targetDir);
  console.log(`\x1b[32m✔ Successfully installed skill [${skillName}] into .antigravity/skills/${skillName}/\x1b[0m`);
  console.log(`\x1b[90mAntigravity, Cursor, and Claude Code can now execute this skill autonomously.\x1b[0m`);
} else {
  console.log(`
Available Commands:
  npx vibe-skills list              List all 23 standard agent skills
  npx vibe-skills add <skill-name>  Install a skill into your local .antigravity/skills/
  npx vibe-skills help              Show this help menu
`);
}
