export function byWeightAscending(data) {
  return data.sort(function(a, b) {
    return a.weight - b.weight;
  });
}

export function byWeightDescending(data) {
  return data.sort(function(a, b) {
    return b.weight - a.weight;
  });
}
