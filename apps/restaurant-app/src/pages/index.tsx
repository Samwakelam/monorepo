import { GetServerSidePropsContext } from 'next';
import { IndexLayout } from '../layouts';

type IndexProps = {};

const Index = ({}: IndexProps) => {
  return (
    <div style={{ height: '100%' }}>
      <IndexLayout />
    </div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: IndexProps }> => {
  return {
    props: {},
  };
};
