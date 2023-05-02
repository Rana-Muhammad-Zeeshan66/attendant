import styled from 'styled-components';

const StyledUserDeleteModal = styled.div`
  .userdelete-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 400px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 8px;
  }

  .btns-container {
    padding: 20px 0 0 0;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  }
`;

export default StyledUserDeleteModal;
