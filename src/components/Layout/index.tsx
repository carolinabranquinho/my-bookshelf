import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bookshelfLogo from "@/public/bookshelf-svgrepo-com.svg";
import useAuthenticationMethods from "@/hooks/useAuthenticationMethods";
import Dialog from "@/components/Dialog";

export default function Layout() {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useAuthenticationMethods();
  const [isOpen, setIsOpen] = useState(false);
  const [authDialog, setAuthDialog] = useState<
    "signin" | "signup" | undefined
  >();
  const navigate = useNavigate();

  const handleModal = (method: "signin" | "signup" | undefined) => {
    setIsOpen(!isOpen);
    setAuthDialog(method);
  };

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <nav className="flex flex-wrap items-center justify-between bg-gradient-to-r from-orange-200 to-orange-300 p-3">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <img src={bookshelfLogo} alt="my-bookshelf logo" className="w-9" />
          <span className="ml-4 text-xl font-semibold tracking-tight">
            My Bookshelf
          </span>
        </div>

        <div>
          {currentUser ? (
            <button
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-orange-300 lg:mt-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-orange-300 lg:mt-0"
                onClick={() => handleModal("signin")}
              >
                Sign In
              </button>
              <button
                className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-orange-300 lg:mt-0"
                onClick={() => handleModal("signup")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
      <main>
        <Outlet />
      </main>

      <footer className="m-4 rounded-lg bg-white">
        <div className="mx-auto w-full p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <a href="#" className="hover:underline">
              MyBookshelf™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} method={authDialog} />
    </div>
  );
}
