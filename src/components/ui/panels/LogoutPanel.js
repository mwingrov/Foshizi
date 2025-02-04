import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../base/store/authSlice';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNotification = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Logout = ({onClose}) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const route = useRouter();
    const logoutAction = {
        type: 'LOGOUT',
        payload: null, // optional payload
      };

    const handleClick = () => {
        setTimeout(() => {
            route.push("/");
            setTimeout(() => {dispatch(logout())}, 500);
        }, 3000);
    };

    return (
    <StyledModal onClick={onClose}>
        <StyledNotification onClick={handleClick}>
            <p>{user.name} is successfully logged out.</p>
        </StyledNotification>
    </StyledModal>
    );
};

export default Logout;