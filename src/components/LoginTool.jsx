import {useNavigate, Link} from "react-router-dom";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { authProvider } from "../firebase";

const Wrapper = styled.div`
    width: 30vw;
    height: 250px;
    cursor: default;
    background: pink;
    margin: 10vh auto 0 auto;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: solid 1px #A9A9A9;
    font-size: 20px;
    border-radius: 10px;

    h2{
        font-size: 30px;
        font-weight: 500;
    }
    span{
        position: absolute;
        top:0;
    }
    form{
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
    input{
        margin: 10px 2vw 10px 2vw;
        width: 20vw;
        height: 40px;
        padding: 1px 2vh 1px 2vh;
        
        text-align: center;

        cursor: pointer;

        outline: none;
        border: solid 1px #A9A9A9;
        font-size: 20px;
        border-radius: 20px;
    }
`;

function LoginTool() {
  const [toggleNew, setToggleNew] = useState(false);
  const navigate = useNavigate();

  const onLogin = async(data, e) => {
    e.preventDefault();
    await authProvider.signInWithEmailAndPassword(data.Id, data.Password);
    navigate("/");
    console.log(data);
  };

  const OnJoin = async (data, e) => {
    e.preventDefault();
    await authProvider.createUserWithEmailAndPassword(data.newId, data.newPassword);
    setToggleNew((prev)=>!prev);
    console.log(data);
  };

  const onClick = () => {
    setToggleNew((prev)=>!prev);
  }

  const onError = (errors, e) => console.log(errors, e);

  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      {toggleNew ? null :
        <form onSubmit={handleSubmit(onLogin, onError)}>
          <input {...register('Id', { required: true })} type="email" placeholder="아이디" />
          <input {...register('Password', { required: true, minLength: 6, maxLength:12, pattern: /[A-Za-z]/})} type="password" placeholder="비밀번호"/>
          <input type="submit" value="로그인"/>
          <button onClick={onClick}>회원가입</button>
      </form>
      }
      {toggleNew ?
        <form onSubmit={handleSubmit(OnJoin, onError)}>
          <input {...register('newId', { required: true })} type="email" placeholder="아이디" />
          <input {...register('newPassword', { required: true, minLength: 6, maxLength:12, pattern: /[A-Za-z]/})} type="password" placeholder="비밀번호"/>
          <input type="submit" value="회원가입"/>
        </form> : null
      }
    </Wrapper>
  );
}

export default LoginTool;