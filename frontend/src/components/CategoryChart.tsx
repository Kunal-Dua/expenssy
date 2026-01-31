import { Doughnut } from "react-chartjs-2";
import { OTHERS_COLOR, PALETTE, type categorySumType } from "../types";
import { useRecoilValue } from "recoil";
import { categoryAmountSelector } from "../store/selector/categorySelector";

const prepareChartData = (data: categorySumType[]) => {
    const sorted = [...data].sort((a, b) => b.amount - a.amount);

    if (sorted.length <= 5) {
        return {
            labels: sorted.map((d) => d.categoryName),
            values: sorted.map((d) => d.amount),
            colors: PALETTE.slice(0, sorted.length),
        };
    }

    const topFive = sorted.slice(0, 5);
    const others = sorted.slice(5);

    const othersTotal = others.reduce((sum, d) => sum + d.amount, 0);

    return {
        labels: [...topFive.map((d) => d.categoryName), "Others"],
        values: [...topFive.map((d) => d.amount), othersTotal],
        colors: [...PALETTE, OTHERS_COLOR],
    };
};

const CategoryChart = () => {
    const categorySum = useRecoilValue(categoryAmountSelector);

    const { labels, values, colors } = prepareChartData(categorySum);

    return (
        <Doughnut
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "Expenses by category",
                        data: values,
                        backgroundColor: colors,
                        borderWidth: 1,
                    },
                ],
            }}
        />
    );
};

export default CategoryChart;
