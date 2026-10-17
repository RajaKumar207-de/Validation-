
import { body, validationResult } from "express-validator";

export const registerValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .bail()
        .isEmail().withMessage("Invalid email address"),

    body("phone")
        .notEmpty().withMessage("Phone number is required")
        .bail()
        .isMobilePhone("en-IN")
        .withMessage("Invalid phone number"),

    body("password")
        .notEmpty().withMessage("Password is required")
        .bail()
        .isString().withMessage("Password must be a string")
        .bail()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Invalid request",
                errors: errors.array()
            });
        }

        next();
    }
];
