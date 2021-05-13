import { Container } from '@material-ui/core';
import { FC } from 'react';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

export const AddItem: FC = () => {
  return (
    <LayoutWrapper title="Add Item" showBackArrow>
      <Container maxWidth="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae nostrum ullam,
        culpa, sunt quaerat repellendus laudantium obcaecati perspiciatis blanditiis iusto dicta id
        fugit adipisci repellat aut quam fuga voluptate?
      </Container>
    </LayoutWrapper>
  );
};
