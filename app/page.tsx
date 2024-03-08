
import {  Overview } from '@/components';
import DataTable from '@/components/DataTable';
import { fetchUsers, fetchUsers2 } from '@/utils';
export default async function Home() {
  const users = await fetchUsers();
  const users2 = await fetchUsers2();
  

  return (
    <main>
      <div className='bg-[#153945] mx-72 text-stone-100'>
        <DataTable users={users} />
      </div>
      <div className='flex justify-center bg-[#153945] pt-8'>
        <Overview users={users2} />
      </div>
    </main>
  );
}
