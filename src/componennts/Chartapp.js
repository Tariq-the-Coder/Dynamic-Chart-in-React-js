import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chartapp(data) {
    const Labels = data.data.map(emp => emp.sub);
    const dataval = data.data.map(val => val.sem);

    const Chartdata = {
        labels: Labels,
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: '#3f51b5',
                borderWidth: 2,
                data: dataval
            }
        ]
    }

    return (
        <div id="Chart-body" style={{ textAlign: "center", marginTop: "5rem" }}>
            <div style={{ border: '0.1rem solid', width: "60rem", height: "400px", display: "inline-flex", margin: "auto", textAlign: "center" }}>
                <Bar
                    data={Chartdata}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Overall Portfolio',
                            fontSize: 15
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtzero: true,
                                    fontSize: 15,
                                    fontcolor: "#000"
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontSize: 15,
                                    fontcolor: "#000"
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    )
}
