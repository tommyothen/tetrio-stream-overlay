import { useRouter } from 'next/router';
import useSWR from 'swr';
import 'react-circular-progressbar/dist/styles.css';
import Profile from '../../components/profile';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function User() {
  const router = useRouter();
  const { user } = router.query;

  const { data, error } = useSWR(`/api/user?id=${user}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (<Profile data={data}/>)
}
