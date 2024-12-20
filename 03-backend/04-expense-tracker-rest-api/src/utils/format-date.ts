export function formatDate(date: Date) {
  const theDate = date.getDate();
  const theMonth = date.getMonth();
  const theYear = date.getFullYear();

  return `${theMonth}-${theDate}-${theYear}`;
}
