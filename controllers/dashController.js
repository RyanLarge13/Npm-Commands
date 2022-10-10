export const renderDash = (req, res) => {
    res.render('html/dashboard', {
        name: req.user.Username,
    });
};