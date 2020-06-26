import * as React from 'react';
import { Button, Card, CardBody } from '@paljs/ui';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  return (
    <Card>
      <CardBody style={{ textAlign: 'center' }}>
        <Button onClick={() => router.push('/admin')}>Go To Admin Pages</Button>
      </CardBody>
    </Card>
  );
};

export default Index;
