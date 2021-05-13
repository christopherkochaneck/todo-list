import { FC } from 'react';
import { Navbar } from './Navbar';

interface Props {
  title?: string;
  actions?: Array<JSX.Element>;
  showBackArrow?: boolean;
}

export const LayoutWrapper: FC<Props> = (props) => {
  const { title, actions, showBackArrow } = props;

  return (
    <div>
      <Navbar title={title} actions={actions} showBackArrow={showBackArrow} />
      <div className="content">{props.children}</div>
    </div>
  );
};
