const Thought = require('../models/thought');

const thoughtController = {
  getThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      res.json(updatedThought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.id);

      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = thoughtController;

