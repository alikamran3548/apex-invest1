export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    return res.status(200).json({
      totalEntries: 10,
      totalInvestors: 5,
      totalBooks: 8,
      recentActivity: [
        { type: 'entry', title: 'New investment added', date: new Date().toISOString() },
        { type: 'book', title: 'Finished reading "The Intelligent Investor"', date: new Date().toISOString() }
      ]
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}