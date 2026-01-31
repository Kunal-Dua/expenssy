import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { OTHERS_COLOR, PALETTE, type categorySumType } from "../types";

const prepareChartData = (data: categorySumType[]) => {
    const sorted = [...data].sort((a, b) => b._sum.amount - a._sum.amount);

    if (sorted.length <= 5) {
        return {
            labels: sorted.map((d) => d.categoryName),
            values: sorted.map((d) => d._sum.amount),
            colors: PALETTE.slice(0, sorted.length),
        };
    }

    const topFive = sorted.slice(0, 5);
    const others = sorted.slice(5);

    const othersTotal = others.reduce((sum, d) => sum + d._sum.amount, 0);

    return {
        labels: [...topFive.map((d) => d.categoryName), "Others"],
        values: [...topFive.map((d) => d._sum.amount), othersTotal],
        colors: [...PALETTE, OTHERS_COLOR],
    };
};

const CategoryChart = () => {
    const [categorySum, setCategorySumSet] = useState<categorySumType[]>([]);

    useEffect(() => {
        axios
            .get(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/getAmount`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )
            .then((res) => {
                setCategorySumSet(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

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
