const jwt = require('jsonwebtoken');
const UserModel = require('../../modules/auth/user');

const getUser = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      next();
    }
    console.log(token);
    const data = jwt.verify(token, process.env.SECRET_KEY);
    console.log(data);
    
    if (!data.userId) {
      next();
    }
  
    const existedUser = await UserModel.findById(identityData.userId);
  
    if (!existedUser) {
      next();
    }
  
    req.user = existedUser;
    next();
  } catch (err) {
    next();
  }
};

module.exports = getUser;