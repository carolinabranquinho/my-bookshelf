import useAuthenticationMethods from "@/hooks/useAuthenticationMethods";
import {
  Dialog as HeadlessDialog,
  Description,
  DialogPanel,
  DialogTitle,
  Fieldset,
  Field,
  Label,
  Input,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type DialogProps = {
  method: "signin" | "signup" | undefined;
  isOpen: boolean;
  setIsOpen(value: boolean): void;
};

type AuthFieldsProps = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function Dialog({ method, isOpen, setIsOpen }: DialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFieldsProps>();
  const { singinWithEmail, signup } = useAuthenticationMethods();
  const navigate = useNavigate();

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  const onSubmit = ({ email, password }: AuthFieldsProps) => {
    if (method === "signup") {
      signup(email, password, onSucess, onError);
    } else {
      singinWithEmail(email, password, onSucess, onError);
    }
  };

  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  function onSucess() {
    navigate(`/user`);
    setIsOpen(false);
  }

  function onError(error: string) {
    setAuthError(error);
    if (isOpen == false) {
      setIsOpen(true);
    }
  }

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <HeadlessDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 border border-orange-200"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-auto min-w-96 space-y-4 border bg-white p-12">
          <DialogTitle className="text-center text-xl font-semibold tracking-tight">
            {method === "signin" ? "Login" : "Create an Account"}
          </DialogTitle>

          <Description className="text-pretty p-1 text-center text-sm font-thin">
            {method === "signin"
              ? "Log into your account"
              : "Create your account!"}
          </Description>
          {authError && (
            <span className="text-pretty text-center text-sm font-medium text-red-600">
              {authError}
            </span>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset className="space-y-8">
              <Field>
                <Label className="block text-pretty p-1 text-sm font-thin">
                  Email
                </Label>
                <Input
                  className="mt-1 block w-full rounded border border-orange-200 p-2"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm font-thin text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </Field>
              <Field>
                <Label className="block text-pretty p-1 text-sm font-thin">
                  Password
                </Label>
                <Input
                  className="mt-1 block w-full rounded border border-orange-200 p-2"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="text-sm font-thin text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </Field>
              {method === "signup" && (
                <Field>
                  <Label className="block text-pretty p-1 text-sm font-thin">
                    Confirm Password
                  </Label>
                  <Input
                    className="mt-1 block w-full rounded border border-orange-200 p-2"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type="password"
                  />
                  {errors.confirmPassword && (
                    <span className="text-sm font-thin text-red-600">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </Field>
              )}
            </Fieldset>

            <div className="flex justify-between pt-4">
              <button
                className="mr-5 mt-4 inline-block rounded border border-orange-300 px-4 py-2 text-sm leading-none text-orange-300 hover:border-transparent hover:bg-orange-300 hover:text-white lg:mt-0"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <input
                className="hover: mt-4 inline-block rounded border border-orange-300 bg-orange-300 px-4 py-2 text-sm leading-none text-white hover:bg-white hover:text-orange-300 lg:mt-0"
                type="submit"
                value={method === "signin" ? "Login" : "Create Account"}
              />
            </div>
          </form>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
