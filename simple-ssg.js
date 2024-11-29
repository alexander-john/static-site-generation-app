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
