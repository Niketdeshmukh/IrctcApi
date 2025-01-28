const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  
  try {
    // Split the header to extract the token (after 'Bearer')
    const tokenWithoutBearer = token.split(' ')[1];
    
    const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user data to the request
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

exports.authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ error: 'Access denied.' });
  }
  next();
};
