# A Simplified Static Site Generator (No Markdown, No Libraries)

Here’s an ultra-simple example to generate two static pages:

```javascript
const fs = require("fs");

// Data for pages
const pages = [
    { filename: "index.html", title: "Home", content: "<h1>Welcome to My Site</h1><p>This is a simple static site.</p>" },
    { filename: "about.html", title: "About", content: "<h1>About Me</h1><p>I am learning how to generate static sites!</p>" }
];

// HTML template
const template = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    ${content}
</body>
</html>
`;

// Generate pages
pages.forEach(({ filename, title, content }) => {
    const html = template(title, content);
    fs.writeFileSync(filename, html, "utf-8");
    console.log(`Generated: ${filename}`);
});
```

### How It Works
1. The `pages` array contains the data for each page (filename, title, and content).
2. The `template` function wraps content in a simple HTML layout.
3. The script loops over each page, applies the template, and writes an `.html` file.

### Run the script:
```bash 
node simple-ssg.js
```

### Output Files:
- index.html
- about.html

You now have a fully static site!