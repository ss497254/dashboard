export const verfiyPinCode = async (pin_code: string, cb = () => {}) => {
  try {
    const res = await (
      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ pin_code }),
      })
    ).json();

    if (res.success) {
      cb();
      return null;
    }
  } catch {}

  return "INVALID CODE";
};
