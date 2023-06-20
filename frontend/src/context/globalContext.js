import React, { useContext, useState } from "react"
import axios from 'axios'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const API = axios.create({ baseURL: 'http://localhost:5000' });

    API.interceptors.request.use((req) => {
        if (localStorage.getItem('profile')) {
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        }

        return req;
    });

    const addIncome = (income) => {
        API.post('/transaction/add-income', income);
        getIncomes();
    }

    const getIncomes = async () => {
        try {
            const response = await API.get('/transaction/get-incomes');
            setIncomes(response.data);
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    const deleteIncome = async (id) => {
        try {
            const response = await API.delete(`/transaction/delete-income/${id}`);
            getIncomes();
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const addExpense = (income) => {
        API.post('/transaction/add-expense', income);
        getExpenses();
    }

    const getExpenses = async () => {
        try {
            const response = await API.get('/transaction/get-expenses');
            setExpenses(response.data);
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    const deleteExpense = async (id) => {
        try {
            const response = await API.delete(`/transaction/delete-expense/${id}`);
            getExpenses();
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}