import IncomeSchema from "../models/IncomeModel.js";


export const addIncome = async (req, res) => {
    const {title, amount, category, description, date,userId}  = req.body;
    console.log(amount+"hi am amount");

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        userId,
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        console.log("incomeadded");
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
      
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

export const getIncomes = async (req, res) =>{
    var id=""
    try {
        const incomes = await IncomeSchema.find(
        ).sort({createdAt: -1})
        console.log(incomes);
        res.status(200).json(incomes)
    } catch (error) {
        console.log("error hu mei ek ");
        console.log(error);
        res.status(500).json({message: 'Server Error'})
    }
}

export const deleteIncome = async (req, res) =>{
    const {id} = req.params;
    console.log(id);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}