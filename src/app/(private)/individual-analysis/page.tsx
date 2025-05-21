
import IndividualAnalysis from '@/components/IndividualAnalysis';

export default async function Page() {
  
  const response = await fetch('https://eduboard-api.onrender.com/actor/all')
  const users = await response.json()

  console.log('users', users)

  // esses dados virao da api
  // const users2 = [
  //   { username: "fabricyoribeiro", name: "Fabricyo Ribeiro Silva", age: 22 },
  //   { username: "joaodasilva", name: "João da Silva", age: 30 },
  // ];

  return <IndividualAnalysis users={users} />;
}
