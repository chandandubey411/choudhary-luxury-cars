/**
 * Returns cars matching the given type, or all cars if type === "All".
 * Does NOT mutate the input array.
 */
export function filterByType(cars, type) {
  if (type === "All") return [...cars];
  return cars.filter((car) => car.type === type);
}

/**
 * Returns a sorted copy of the cars array.
 * "price-asc"  → ascending pricePerHour
 * "price-desc" → descending pricePerHour
 * "default"    → original order
 * Does NOT mutate the input array.
 */
export function sortCars(cars, sortBy) {
  const copy = [...cars];
  if (sortBy === "price-asc") return copy.sort((a, b) => a.pricePerHour - b.pricePerHour);
  if (sortBy === "price-desc") return copy.sort((a, b) => b.pricePerHour - a.pricePerHour);
  return copy;
}
