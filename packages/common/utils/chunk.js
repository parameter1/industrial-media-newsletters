module.exports = (arr, size) => {
  const result = Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size),
  );
  return result;
};
