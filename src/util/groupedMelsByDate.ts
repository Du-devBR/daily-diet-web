import { IMeal } from "../screens/home";

export const groupMealsByDate = (meal: IMeal[]): Record<string, IMeal[]> => {
  const groupedRefeicoes: Record<string, IMeal[]> = {};

  meal.forEach((meal) => {
    const date = meal.createdAt.slice(0, 10);

    if (!groupedRefeicoes[date]) {
      groupedRefeicoes[date] = [];
    }

    groupedRefeicoes[date].push(meal);
  });

  return groupedRefeicoes;
};
