export interface CounterState
{
    data: number;
    title:string
}

const initialState: CounterState=
{
    data: 42,
    title: 'yet another react redux counter'
}

export default function counterReducer(state = initialState, action: any)
{
    return state;
}