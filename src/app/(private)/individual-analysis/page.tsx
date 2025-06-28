
import IndividualAnalysis from '@/components/IndividualAnalysis';
import { BASE_URL } from "../../../constants/baseUrl";

export default async function Page() {
  
  const response = await fetch(`${BASE_URL}/actor/all`)
  const users = await response.json()

  console.log('users', users)


  return <IndividualAnalysis users={users} />;
}
