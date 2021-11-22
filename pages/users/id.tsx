/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface User{
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string,
}
interface UserDetailProps{
  user: User;
}
export default function UserDetail(props: UserDetailProps) {
  // const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>

  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

interface GetStaticProps{
  params: {
    id: string,
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/${id}');
  const user = await res.json();
  return {
    props: {
      user: {},
    },
  };
}
