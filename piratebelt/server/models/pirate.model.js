const mongoose = require("mongoose");

const PirateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required"],
      minlength: [3, "Name must be 3 characters or longer"],
    },
    url: {
      type: String,
      required: [true, "Url required"],
      minlength: [3, "Name must be 3 characters or longer"],
    },
    number: {
      type: Number,
      required: [true, "Name required"],
      minlength: [0, "Treasure Chest must be 0 or longer"],
    },
    phrase: {
      type: String,
      required: [true, "Phrase required"],
      minlength: [3, "Phrase must be 3 characters or longer"],
    },
    crewPosition: {
      type: String,
      required: [true, "Crew Position required"],
    },
    pegLeg: {
      type: Boolean,
      required: true,
    },
    eyePatch: {
      type: Boolean,
      required: true,
    },
    hookHand: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;
