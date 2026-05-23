const fs = require('fs');
const path = require('path');

const SEOMap = {
  'RetailEcommerce.tsx': {
    title: 'Retail & eCommerce ERP Solutions | Manomay Global Solutions',
    description: 'Empower your omnichannel retail and eCommerce business with unified ERP solutions that integrate POS, inventory, shipping, and financials.'
  },
  'Manufacturing.tsx': {
    title: 'Manufacturing ERP Solutions | Manomay Global Solutions',
    description: 'Streamline production, manage supply chains, and gain real-time visibility with our customized manufacturing ERP implementations.'
  },
  'ITProfessionalServices.tsx': {
    title: 'IT & Professional Services ERP | Manomay Global Solutions',
    description: 'Optimize resource allocation, project tracking, and billing with specialized ERP solutions for IT and Professional Services.'
  },
  'CRMHelpDesk.tsx': {
    title: 'CRM & Helpdesk Solutions | Manomay Global Solutions',
    description: 'Drive customer retention and streamline support operations with our unified CRM and Helpdesk implementations.'
  },
  'WhyManomay.tsx': {
    title: 'Why Choose Manomay | Expertise & Value',
    description: 'Discover why businesses trust Manomay Global Solutions for their ERP implementation, technical expertise, and continuous value creation.'
  },
  'OdooModulesExplorer.tsx': {
    title: 'Explore Odoo Modules | Manomay Global Solutions',
    description: 'Browse the comprehensive suite of Odoo modules. Find the perfect apps to power your sales, finance, inventory, and operations.'
  },
  'OdooPOS.tsx': {
    title: 'Odoo Point of Sale (POS) Solutions | Manomay Global Solutions',
    description: 'Modernize your retail operations with a robust, offline-capable Odoo POS system seamlessly integrated with inventory and accounting.'
  }
};

const pagesDir = path.join(__dirname, '../src/pages');

for (const [file, seo] of Object.entries(SEOMap)) {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not exists
    if (!content.includes('import SEO from "../components/SEO";')) {
      // Find the last import line
      const importRegex = /^import .+ from .+;$/gm;
      let lastMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastMatch = match;
      }
      
      if (lastMatch) {
        const index = lastMatch.index + lastMatch[0].length;
        content = content.slice(0, index) + '\nimport SEO from "../components/SEO";' + content.slice(index);
      } else {
        content = 'import SEO from "../components/SEO";\n' + content;
      }
    }
    
    // Add SEO component inside the return block
    const returnRegex = /return \(\s*<[a-zA-Z0-9_]+([^>]*)>/;
    const match = content.match(returnRegex);
    if (match && !content.includes('<SEO')) {
      const index = match.index + match[0].length;
      const seoStr = `\n      <SEO \n        title="${seo.title}" \n        description="${seo.description}" \n      />`;
      content = content.slice(0, index) + seoStr + content.slice(index);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
