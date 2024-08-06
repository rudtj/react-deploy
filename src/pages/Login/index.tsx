import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import KAKAO_LOGO from "@/assets/kakao_logo.svg";
import { Button } from "@/components/common/Button";
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField";
import { Spacing } from "@/components/common/layouts/Spacing";
import { breakpoints } from "@/styles/variants";
import { RouterPath } from "@/routes/path";
import { useLogin } from "@/hooks/useLogin";
import axios from "axios";
import { BASE_URL } from "@/api/instance";
import { authSessionStorage } from "@/utils/storage";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useLogin();
  const [queryParams] = useSearchParams();

  const handleConfirm = async () => {
    handleLogin(id, password);

    axios
      .post("https://pnuece.pnu.app/api/members/login", {
        email: id,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        authSessionStorage.set({ token, id });
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });

    const redirectUrl =
      queryParams.get("redirect") ?? `${window.location.origin}/`;
    return window.location.replace(redirectUrl);
  };

  const handleKakaoLogin = () => {
    const url = "https://pnuece.pnu.app/api/oauth/kakao/code";
    const parsedUrl = new URL(url);
    console.log(parsedUrl);
    const params = new URLSearchParams(parsedUrl.search);
    const code = params.get("code");

    console.log(code);

    axios
      .get("https://pnuece.pnu.app/api/oauth/kakao/code")
      .then((response) => {
        const kakaoToken = response.data.token;

        console.log(kakaoToken);

        localStorage.setItem("token", kakaoToken);
        authSessionStorage.set(kakaoToken);
        return window.location.replace("/home");
      })
      .catch((error) => {
        console.error("Kakao Login failed:", error);
      });
  };

  const handleKakaoLogin = () => {
    axios
      .get(`${BASE_URL}/api/oauth/kakao/code`)
      .then((response) => {
        const kakaoToken = response.data.token;

        localStorage.setItem("token", kakaoToken);
        authSessionStorage.set(kakaoToken);
        return window.location.replace("/home");
      })
      .catch((error) => {
        console.error("Kakao Login failed:", error);
      });
  };

  return (
    <Wrapper>
      <Logo src={KAKAO_LOGO} alt="카카고 CI" />
      <FormWrapper>
        <UnderlineTextField
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Spacing />
        <UnderlineTextField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Spacing
          height={{
            initial: 40,
            sm: 60,
          }}
        />
        <Button onClick={handleConfirm}>로그인</Button>
        <Spacing
          height={{
            initial: 20,
          }}
        />
        <Button onClick={handleKakaoLogin}>카카오 로그인</Button>
        <RegisterWrapper>
          <Link to={RouterPath.register}>회원가입</Link>
        </RegisterWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 88px;
  color: #333;
`;

const FormWrapper = styled.article`
  width: 100%;
  max-width: 580px;
  padding: 16px;

  @media screen and (min-width: ${breakpoints.sm}) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 60px 52px;
  }
`;

const RegisterWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-size: 12px;
`;
