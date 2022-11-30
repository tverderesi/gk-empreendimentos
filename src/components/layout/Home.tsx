import Grid from '../widgets/Grid';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { PageLayout } from './PageLayout';

export default function Home() {
  const { population } = useContext(AppContext);
  return (
    <PageLayout population={population}>
      <>
        <Grid population={population} />
      </>
    </PageLayout>
  );
}
