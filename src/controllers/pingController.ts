export const pingCheck = (req, res) => {
  res.status(200).json({ message: "pong" });
};
