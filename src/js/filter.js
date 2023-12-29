export function filterBy(tasks, callback) {
  return tasks.filter(callback);
}
export function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}
