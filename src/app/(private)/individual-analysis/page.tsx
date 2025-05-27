
import IndividualAnalysis from '@/components/IndividualAnalysis';

export default async function Page() {
  
  const response = await fetch('http://127.0.0.1:5000/actor/all')
  const users = await response.json()

  console.log('users', users)

  // esses dados virao da api
  // const users2 = [
  //   { username: "fabricyoribeiro", name: "Fabricyo Ribeiro Silva", age: 22 },
  //   { username: "joaodasilva", name: "João da Silva", age: 30 },
  // ];

  return <IndividualAnalysis users={users} />;
}
