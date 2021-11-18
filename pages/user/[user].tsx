import { useRouter } from 'next/router';
import useSWR from 'swr';
import Image from 'next/image';
import Head from 'next/head';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function User() {
  const router = useRouter();
  const { user } = router.query;

  const { data, error } = useSWR(`/api/user?id=${user}`, fetcher, { refreshInterval: 300e3});

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (<>
    <Head>
      <title>{data.username} overlay</title>
    </Head>
    <div className="flex">
      <div className="f-item">
        <div className="bar-out">
          <CircularProgressbar
            value={(((data.prev_at - data.standing)/(data.prev_at - data.next_at)) * 100)}
            background={true}
            strokeWidth={8}
            styles={buildStyles({
              pathColor: '#E2FCDE',
              backgroundColor: '#162113',
              trailColor: '#5C8456',
            })}
            className="progress-bar"
          />
        </div>
        <div className="img-out">
          <Image
            src={`https://tetr.io/res/league-ranks/${data.rank}.png`} alt={data.rank}
            height="45"
            width="45"
            className="league-rank"
          />
        </div>
      </div>
      <div className="f-item">
        <div className="text-stats">
          <div>
            <span className="t-light t-24 t-bold">
              {Math.floor(data.rating)}
              <sub className="t-medium">.{Math.round((data.rating - Math.floor(data.rating)) * 100)}</sub>
              <span className="t-dark t-reg"> TR</span>
            </span>
            <br />
            <span className="t-dark t-12 t-reg">
              Glicko:
              <span className="t-bold t-light"> {Math.floor(data.glicko)}</span>
              <sub className="t-medium t-bold">.{Math.round((data.glicko - Math.floor(data.glicko)) * 100)}</sub>
              ±{Math.floor(data.rd)}
              <sub>.{Math.round((data.rd - Math.floor(data.rd)) * 100)}</sub>
            </span>
          </div>
        </div>
        <div id="profile_leaguestandingset">
          <div className="standingitem_clickable">
            <h1>GLOBAL</h1>
            <p><span>#</span>{data.standing}</p>
          </div>
          <div className="standingitem_clickable">
            <h1>COUNTRY</h1>
            <p><span>#</span>{data.standing_local}</p>
          </div>
        </div>
      </div>
    </div>
    <svg className="vector-box" width="350" height="125" viewBox="0 0 350 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 7.5H342.5V88.6418L313.832 117.5H7.5V7.5Z" fill="#162113" stroke="#0F160D" strokeWidth="15" />
    </svg>
  </>)
}
