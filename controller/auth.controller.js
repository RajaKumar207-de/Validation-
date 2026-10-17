
export async function register(req, res) {
    try {
        const { email, phone } = req.body;

        return res.status(200).json({
            message: "Validation successful",
            data: {
                email,
                phone
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
