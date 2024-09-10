import { useContext, useState } from "react";
import bookshelfLogo from "@/public/bookshelf-svgrepo-com.svg";
import Dialog from "@/components/Dialog";
import { AuthContext } from "@/context/AuthContext";
import useAuthenticationMethods from "@/hooks/useAuthenticationMethods";

export default function Homepage() {
  const { logout } = useAuthenticationMethods();
  const [isOpen, setIsOpen] = useState(false);
  const [authDialog, setAuthDialog] = useState<
    "signin" | "signup" | undefined
  >();
  const { currentUser } = useContext(AuthContext);

  const handleModal = (method: "signin" | "signup" | undefined) => {
    setIsOpen(!isOpen);
    setAuthDialog(method);
  };

  return (
    <div className="h-screen w-screen">
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
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-orange-300 lg:mt-0"
              onClick={() => handleModal("signin")}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <section className="flex h-4/5 flex-col justify-around font-sans">
        <div className="p-20">
          <h1 className="text-xl font-semibold">Welcome to MyBookshelf!</h1>
          <p>
            Discover a new way to explore, organize, and track your reading
            journey. MyBookshelf allows you to manage your personal library,
            from your favorite classics to the latest bestsellers. Whether
            you're searching for your next great read, organizing by genre or
            author, or sharing your progress with friends, we’ve got you
            covered.
          </p>
          <p>
            Start building your bookshelf today and unlock a world of
            possibilities for your literary adventures!
          </p>
          <button
            className="mt-4 inline-block rounded border border-orange-300 px-4 py-2 text-sm leading-none text-orange-300 hover:border-transparent hover:bg-orange-300 hover:text-white lg:mt-0"
            onClick={() => handleModal("signup")}
          >
            Create an Account!
          </button>
        </div>
      </section>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} method={authDialog} />
    </div>
  );
}
