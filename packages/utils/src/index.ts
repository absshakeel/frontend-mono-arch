export const formatCurrency = (amount: number) =>{
    return new Intl.NumberFormat("en-BD",{
        currency: "BDT",
        style: "currency"
    }).format(amount)
}