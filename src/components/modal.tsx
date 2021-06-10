import { memo } from 'react';
import { Modal as ModalView } from 'react-bootstrap';
import { useModal } from '../hooks/useModal';
import { HeaderProps } from './types';

const Header = memo<HeaderProps>(({ title }) => (
  <ModalView.Header closeButton>
    <ModalView.Title id="contained-modal-title-vcenter">
      {title}
    </ModalView.Title>
  </ModalView.Header>
));

export const Modal = () => {
  const { title, show, body: Body, setModalState } = useModal();

  return (
    <ModalView
      onHide={() => setModalState({ show: false })}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {title && <Header title={title} />}

      <ModalView.Body>
        <Body />
      </ModalView.Body>
    </ModalView>
  );
};
