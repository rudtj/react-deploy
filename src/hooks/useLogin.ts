import { useState } from "react";
import axios from "axios";
import { authSessionStorage } from "@/utils/storage";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "@/api/instance";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryParams] = useSearchParams();

  const handleLogin = async (id: string, password: string) => {
    setLoading(true);
    setError("");

    if (!id || !password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/members/login`, {
        email: id,
        password,
      });

      const { token } = response.data;
      authSessionStorage.set({ token, id });

      const redirectUrl =
        queryParams.get("redirect") ?? `${window.location.origin}/`;
      window.location.replace(redirectUrl);
    } catch (error: any) {
      const message = error.response?.data?.message || "로그인에 실패했습니다.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, error, loading };
};
