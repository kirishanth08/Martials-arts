const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasNavActions = content.includes('nav-actions-wrap');
  const hasCombatNav = content.includes('id="combatNavContent"');
  console.log(f, 'hasNavActions:', hasNavActions, 'hasCombatNav:', hasCombatNav);
});
