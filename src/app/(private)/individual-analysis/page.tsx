
import IndividualAnalysis from '@/components/IndividualAnalysis';

export default async function Page() {

  // esses dados virao da api
  const users = [
    { id: 1, username: "fabricyoribeiro", name: "Fabricyo Ribeiro Silva", age: 22 },
    { id: 2, username: "joaodasilva", name: "João da Silva", age: 30 },
  ];

  return <IndividualAnalysis users={users} />;
}
