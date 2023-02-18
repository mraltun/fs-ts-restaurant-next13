import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <a href='' className='font-bold text-gray-700 text-2xl'>
            Restaurant
          </a>
          <div>
            <div className='flex'>
              <button className='bg-blue-400 text-white border mr-3 p-1 px-4 rounded'>
                Sign In
              </button>
              <button className='border p-1 px-4 rounded'>Sign Up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
      </main>
    </main>
  );
}