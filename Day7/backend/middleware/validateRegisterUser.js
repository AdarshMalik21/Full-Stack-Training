import Joi from "joi";

const validateRegisterUser = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.number().required(),
    role: Joi.string().optional(),
  }).unknown(false); 

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      error: error.details[0].message,
    });
  }

  // If validation passes, continue
  next();
};

export default validateRegisterUser;
