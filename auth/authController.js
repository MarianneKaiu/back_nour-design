module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const { pseudo, email, password } = req.body;

    try {
        const user = await UserModel.create({ pseudo, email, password });
        res.status(201).json({ user: user._id });
    } catch (error) {
        res.status(500).send({ error });
    }
};

// bcrypt
//                     .compare(req.body.password, user.password)
//                     .then((isPasswordValid) => {
//                         if (!isPasswordValid) {
//                             const message = `Le mot de passe ne correspond pas`;
//                             return res.status(401).json({ message });
//                         }
//                         const message = `L'utilisateur à été connécté avec succès`;
//                         return res.json({ message, data: user });
//                     });
//             })
