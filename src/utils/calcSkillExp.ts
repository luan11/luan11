export const calcSkillExp = (exp: number, base = 8) =>
  Math.round(((exp * 1) / base) * 100);
