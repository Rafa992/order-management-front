"use client";
import { Loader as LoaderIcon } from "lucide-react";
import React from "react";
import Form from "@/components/form/Form";
import Field from "@/components/ui/field/Field";
import { useRegisterMutation } from "@/api/auth.api";
import { Register } from "@/types/auth";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import FieldPassword from "@/components/ui/field/FieldPassword";
import { saveTokenStorage } from "@/services/auth-token.service";
import { useRouter } from "next/navigation";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import s from '../Login.module.scss'
import useInitialError from "@/hooks/error/useInitialError";

const RegisterPage = () => {
  const [register, { isLoading, error, data }] = useRegisterMutation();
  const methods = useForm();
  const { push } = useRouter();
  const { reset } = methods;
  const {initialError} = useInitialError();

  const handleSubmit = async (data: Register) => {
    try {
      const res = await register(data).unwrap();
      saveTokenStorage(res.accessToken, res.refreshToken);
      reset();
      initialError(true, 'Вы успешно вошли в систему!', 'success');
      push(DASHBOARD_PAGES.HOME);
    } catch (error) {
      console.log("Error while trying to sign up", error);
    }
  };

  return (
    <div className={s.auth}>
      <h1 className={s.auth_title}>Sing Up</h1>
      <Form onSubmit={handleSubmit} methods={methods}>
        <Field
          className="w-full"
          name="name"
          label="User name"
          type="text"
          validation={{
            required: "User Name is required",
            minLength: { value: 3, message: "Minimum length is 3 characters" },
            maxLength: {
              value: 20,
              message: "Maximum length is 20 characters",
            },
          }}
        />
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
        <span className={s.auth_link_question}>Already have an account?</span>
        <span className="text-blue-600 underline">
          <Link href="/auth/login">Sign in</Link>
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
