"use client";
import { Loader as LoaderIcon } from "lucide-react";
import React from "react";
import Form from "@/components/form/Form";
import Field from "@/components/ui/field/Field";
import { useLoginMutation } from "@/api/auth.api";
import { Login } from "@/types/auth";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { saveTokenStorage } from "@/services/auth-token.service";
import { useRouter } from "next/navigation";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import Link from "next/link";
import s from '../Login.module.scss';
import FieldPassword from "@/components/ui/field/FieldPassword";
import { useAppSelector } from "@/redux/store";
import { selectColor } from "@/redux/slices/colorSlice";

const LoginPage = () => {
  const { push } = useRouter();

  const [login, { isLoading, error, data }] = useLoginMutation();
  const methods = useForm<Login>();
  const { reset } = methods;
  const color = useAppSelector(selectColor)

  const handleSubmit = async (data: Login) => {


    try {
      const res = await login(data).unwrap();
      saveTokenStorage(res.accessToken, res.refreshToken);
      reset();
      push(DASHBOARD_PAGES.HOME);
    } catch (error) {
      console.log("Error while trying to login", error);
    }
  };

  return (
    <div className={s.auth}>
      <h1 className={s.auth_title}>Sing in</h1>
      <Form onSubmit={handleSubmit} methods={methods}>
        <Field
          name="email"
          label="Email"
          type="email"
          className="w-full"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          }}
        />
        <FieldPassword
          className="w-full"
          name="password"
          label="Password"
          validation={{
            required: "Password is required",
            minLength: { value: 6, message: "Minimum length is 6 characters" },
            maxLength: {
              value: 20,
              message: "Maximum length is 20 characters",
            },
          }}
        />
        <Button
          className={s.auth_button}
          type="submit"
          variant="contained"
          endIcon={isLoading ? <LoaderIcon className="animate-spin h-5" /> : ""}
        >
          {!isLoading ? "Send" : ""}
        </Button>
      </Form>
      <p className={s.auth_link}>
        <span className={s.auth_link_question}>If you don't have an account yet?</span>
        <span className="text-blue-600 underline">
          <Link href="/auth/register">Sign up</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
