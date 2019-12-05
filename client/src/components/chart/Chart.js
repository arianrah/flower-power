import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart(props) {
  return (
    <Bar
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 400, 3, 5, 2, 3],
            borderWidth: 1
          }
        ]
      }}
      width={100}
      height={600}
      options={{ maintainAspectRatio: false }}
    />
  );
}
