import path from 'path';
import fs from 'fs';
import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import CNL from '../src/Arquivos/Navega/Pagina/NossasLojas';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/NossasLojas', (req, res) => {
  const app = ReactDOMServer.renderToString(<CNL />);

  const indexFile = path.resolve('./build/index.html');
   fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));