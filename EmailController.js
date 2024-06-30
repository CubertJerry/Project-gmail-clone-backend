const Email = require('../models/Email');

exports.sendEmail = async (req, res) => {
  try {
    const { recipient, subject, body } = req.body;
    const sender = req.user.email;
    const newEmail = new Email({ sender, recipient, subject, body, status: 'sent' });
    await newEmail.save();
    res.status(201).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmails = async (req, res) => {
  try {
    const emails = await Email.find({ recipient: req.user.email, status: 'inbox' });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};