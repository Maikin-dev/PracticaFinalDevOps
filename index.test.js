const fs = require('fs');
const path = require('path');

test('Verifica que el archivo index.html existe', () => {
    const filePath = path.resolve(__dirname, 'index.html');
    expect(fs.existsSync(filePath)).toBe(true);
});

test('Verifica que el título es "Practica Final"', () => {
    const htmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    expect(htmlContent.includes('<title>Practica Final</title>')).toBe(true);
});
