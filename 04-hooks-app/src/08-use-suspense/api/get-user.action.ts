export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('inicio llamada');
  await new Promise((res) => setTimeout(res, 2000));
  console.log('resolvio');
  return {
    id: id,
    name: 'Fernando Herra',
    location: 'Ottawa, Canada',
    role: 'Instructor de Software',
  };
};
