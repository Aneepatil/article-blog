import bcrypt from "bcryptjs";
export const comparePassword = async (password, isUserExist) => {
  const originalPass = await bcrypt.compare(password, isUserExist.password);
  return originalPass;
};
