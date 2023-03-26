export const useUtils = () => {
  const sayHello = () => console.log("Hello from useUtils");
  const sayGoodbye = () => console.log("Goodbye from useUtils");

  return {
    sayHello,
    sayGoodbye,
  };
};
