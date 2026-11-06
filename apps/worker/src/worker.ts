// Production worker responsibilities: publish transactional outbox events, expire offers,
// send notifications, and record retries. It is deliberately separate from the API process.
console.log('BetaRide worker started. Configure DATABASE_URL and REDIS_URL before production use.');
