import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calculator() {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState('');
    const [periodJob, setPeriodJob] = useState('');
    const [amount, setAmount] = useState('');
    const [grossProfit, setGrossProfit] = useState('');
    const [commission, setCommission] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/employees/')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the employees!', error);
            });
    }, []);

    const handleGrossProfitChange = (e) => {
        const profit = parseFloat(e.target.value);
        setGrossProfit(profit);
        setCommission(profit * 0.1);
    };

    const handleCalculate = () => {
        const jobData = {
            employee,
            period_job: periodJob,
            amount,
            gross_profit: grossProfit
        };

        axios.post('http://localhost:8000/api/jobs/', jobData)
            .then(response => {
                console.log('Job created:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the job!', error);
            });
    };

    return (
        <div>
            <h2>Commission Calculator</h2>
            <form>
                <div className="form-group">
                    <label>Employee</label>
                    <select className="form-control" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                        <option value="">Select Employee</option>
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>{emp.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Period Job</label>
                    <input
                        type="date"
                        className="form-control"
                        value={periodJob}
                        onChange={(e) => setPeriodJob(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Gross Profit</label>
                    <input
                        type="number"
                        className="form-control"
                        value={grossProfit}
                        onChange={handleGrossProfitChange}
                    />
                </div>
                <div className="form-group">
                    <label>Commission</label>
                    <input
                        type="number"
                        className="form-control"
                        value={commission !== null ? commission.toFixed(2) : ''}
                        readOnly
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleCalculate}>Calculate Commission & Create Job</button>
            </form>
        </div>
    );
}

export default Calculator;
