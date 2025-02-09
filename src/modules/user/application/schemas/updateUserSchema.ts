import Joi from "joi";

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).optional().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have a minimum length of 3 characters",
  }),
  email: Joi.string().email().optional().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email cannot be empty",
    "string.email": "Email must be a valid email format",
  }),
});
