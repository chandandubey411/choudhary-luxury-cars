/**
 * Filter cars by category and/or type.
 * Does NOT mutate the input array.
 */
export function filterCars(cars, { category, type }) {
  let result = [...cars];

  if (category && category !== "All") {
    result = result.filter((car) => car.category === category);
  }

  if (type && type !== "All") {
    result = result.filter((car) => car.type === type);
  }

  return result;
}

/**
 * Returns a sorted copy of the cars array.
 * "price-asc"  → ascending price
 * "price-desc" → descending price
 * "default"    → original order
 * Does NOT mutate the input array.
 */
export function sortCars(cars, sortBy) {
  const copy = [...cars];
  if (sortBy === "price-asc") return copy.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") return copy.sort((a, b) => b.price - a.price);
  return copy;
}
