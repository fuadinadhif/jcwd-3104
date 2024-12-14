export function loggerMiddleware() {
  return function (next: any) {
    return function (action: any) {
      console.log("Dispatch triggered!");
      return next(action);
    };
  };
}
