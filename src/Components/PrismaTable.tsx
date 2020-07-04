import React from 'react';
import { useRouter } from 'next/router';
import { PrismaTable } from '@paljs/admin';

const Table: React.FC<{ model: string }> = ({ model }) => {
  const router = useRouter();
  const onSelect = (values: any[]) => {
    console.log(values);
  };
  return <PrismaTable model={model} push={router.push} query={router.query} onSelect={onSelect} />;
};

export default Table;
