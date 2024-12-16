const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Changed to bcryptjs

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // bcryptjs hashing
  next();
});

// Method to compare password for login
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password); // bcryptjs comparison
};

module.exports = mongoose.model("User", UserSchema);
