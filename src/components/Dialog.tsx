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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type DialogProps = {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
};

function onSiginError(error: string) {
  console.error(error);
}

export default function Dialog({ isOpen, setIsOpen }: DialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { singinWithEmail } = useAuthenticationMethods();

  function onSigninSucess(id: string) {
    navigate(`/user/${id}`);
  }

  const sendSignup = () => {
    if (email && password) {
      singinWithEmail(email, password, onSigninSucess, onSiginError);
    }
  };

  //TODO: create an Auth dialog (flag signin or sigup);

  //TODO: implement authprovider or sessionprovider: user session; how to store the session between page refresh
  return (
    <HeadlessDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">Sign up</DialogTitle>
          <Description>Create an Account</Description>
          <Fieldset className="space-y-8">
            <Field>
              <Label className="block">Email</Label>
              <Input
                className="mt-1 block"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <Label className="block">Password</Label>
              <Input
                className="mt-1 block"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Field>
            {/* <Field>
              <Label className="block">Confirm Password</Label>
              <Input className="mt-1 block" name="password" type="password" />
            </Field> */}
          </Fieldset>
          <div className="flex gap-4">
            <button
              className="mr-5 mt-4 inline-block rounded border border-orange-300 px-4 py-2 text-sm leading-none text-orange-300 hover:border-transparent hover:bg-orange-300 hover:text-white lg:mt-0"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="hover: mt-4 inline-block rounded border border-orange-300 bg-orange-300 px-4 py-2 text-sm leading-none text-white hover:bg-white hover:text-orange-300 lg:mt-0"
              onClick={() => sendSignup()}
            >
              Login
            </button>
          </div>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
