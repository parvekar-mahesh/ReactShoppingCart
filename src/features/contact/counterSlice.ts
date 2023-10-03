export interface CounterState
{
    data: number;
    title:string
}

const initialState: CounterState=
{
    data: 42,
    title: 'yet another react redux toolkit'
}

export const counterSlice = createSlice()
