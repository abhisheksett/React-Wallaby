
export const deposit = (amount) => (previousState) => {
    return {
        ...previousState,
        balance: previousState.balance + amount
    }
}

export const reduce = (amount) => (previousState) => {
    return {
        ...previousState,
        balance: previousState.balance - amount
    }
}
