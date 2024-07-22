import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import '../styles/Dashboard.css';

function Dashboard() {
    const [employeeJobs, setEmployeeJobs] = useState([]);
    const [grossProfitData, setGrossProfitData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/dashboard/')
            .then(response => {
                setEmployeeJobs(response.data.employee_jobs);
                setGrossProfitData(response.data.gross_profit_data);
            })
            .catch(error => {
                console.error('There was an error fetching the dashboard data!', error);
            });
    }, []);

    const employeeNames = employeeJobs.map(job => job.employee__name);
    const totalAmounts = employeeJobs.map(job => job.total_amount);

    const months = grossProfitData.map(data => data.month);
    const totalGrossProfits = grossProfitData.map(data => data.total_gross_profit);

    const employeeJobsOptions = {
        chart: {
            type: 'bar',
            height: 400
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: employeeNames
        },
        colors: ['#1E90FF']
    };

    const grossProfitOptions = {
        chart: {
            type: 'bar',
            height: 400
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: months
        },
        colors: ['#32CD32']
    };

    const employeeJobsSeries = [
        {
            name: 'Total Amount',
            data: totalAmounts
        }
    ];

    const grossProfitSeries = [
        {
            name: 'Total Gross Profit',
            data: totalGrossProfits
        }
    ];

    return (
        <div className="dashboard-container">
            <h2>Total Amount by Employee</h2>
            <div className="chart-container">
                <Chart
                    options={employeeJobsOptions}
                    series={employeeJobsSeries}
                    type="bar"
                    height={400}
                />
            </div>

            <h2>Gross Profit Over Time</h2>
            <div className="chart-container">
                <Chart
                    options={grossProfitOptions}
                    series={grossProfitSeries}
                    type="bar"
                    height={400}
                />
            </div>
        </div>
    );
}

export default Dashboard;
