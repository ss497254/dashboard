export const debounced = (fn: () => void, delay: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(fn, delay);
  };
};

export const randomNumberFromRange = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateId = () =>
  Math.ceil(Math.random() * Math.random() * Math.random() * 1000 * 1000 * 1000);
