import jwt from "jsonwebtoken";

export const generateToken = (payload: object): string => {
  const secretKey = "mi_clave_secreta";
  const expirationTime = "1w"; // 1 semana

  const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });

  return token;
};
