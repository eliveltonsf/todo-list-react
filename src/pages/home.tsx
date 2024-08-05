import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="flex justify-center items-center overflow-scroll">
      <div className="max-w-7xl h-svh w-full after:contents-[''] after:table after:clear-both p-3 ">
        <Header user="Elivelton" />

        <div className="h-auto w-full backdrop:blur-sm flex flex-col rounded-lg my-3 flex-wrap mb-6">
          <div className="flex flex-wrap gap-2">

            {/* 
            - form
            - TextInput 
            - button ADD
            */}

          </div>
        </div>
      </div>
    </main>
  );
}
