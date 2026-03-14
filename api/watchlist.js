let watchlist = [
  { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 178.50 },
  { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.80 }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json(watchlist);
  }

  if (req.method === 'POST') {
    const newItem = { id: watchlist.length + 1, ...req.body };
    watchlist.push(newItem);
    return res.status(201).json(newItem);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}