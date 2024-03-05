"use client";

import useAuthModal from "@/hooks/useAuthModal";
import usePlayer from "@/hooks/usePlayer";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useUser } from "@/hooks/useUser";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "../ui/Button";
import { FaUserAlt } from "react-icons/fa";
import { Fragment } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer();
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex justify-center items-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex justify-center items-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push("/")}
            className="rounded-full bg-white flex justify-center items-center cursor-pointer hover:opacity-75 transition"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className="rounded-full bg-white flex justify-center items-center cursor-pointer hover:opacity-75 transition"
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <Fragment>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={authModal.onOpen}
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  className="bg-white px-6 py-2"
                  onClick={authModal.onOpen}
                >
                  Login in
                </Button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
