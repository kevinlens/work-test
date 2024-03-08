import { User } from "@/types";
export async function fetchUsers() {
  const response = await fetch('http://localhost:8000/users');

  const result = await response.json();

  let updatedUser: User[] = result.map((user: any) => {
    let loss = user.loss.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
    let profit = user.profit.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
    let balance = loss + profit;
    let name = `${user.name} ${user.lastname}`
    return {
      id: user.id,
      fullName: name,
      loss: loss,
      profit: profit,
      balance: balance,
    };
  });
   
  return updatedUser;
}

export async function fetchUsers2() {
  const response = await fetch('http://localhost:8000/users');

  const result = await response.json();

  let updatedUser: User[] = result.map((user: any) => {
    let lossArrayPositives = user.loss.map(num => Math.abs(num));
    let loss = user.loss.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
    let profit = user.profit.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
    let balance = loss + profit;
    let name = `${user.name} ${user.lastname}`
    return {
      id: user.id,
      fullName: name,
      loss: lossArrayPositives,
      profit: user.profit,
      totalProfit: profit,
      totalLoss: loss,
      balance: balance
    };
  });
   
  return updatedUser;
}

export const updateSearchParams = (type: any, value: any,) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.append(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};